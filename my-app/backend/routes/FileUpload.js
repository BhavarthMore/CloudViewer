const express = require('express');
const router = express.Router();
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: global.AWS_ACCESS_KEY_ID,
    secretAccessKey: global.AWS_SECRET_ACCESS_KEY,
  },
});

router.post('/generate-url', async (req, res) => {
  try {
    const { userMail,filename, contentType } = req.body;
    let content =  contentType.split('/')[0];

    if (content === "application"){
      content = "documents";
    }

    if (!filename || !contentType) {
      return res.status(400).send({ error: "Filename and contentType are required" });
    }

    const command = new PutObjectCommand({
      Bucket: "shareease1",
      Key: `uploads/user-upload/${userMail}/${content}/${filename}`, // Use the actual filename
      ContentType: contentType,
    });

    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 }); // URL valid for 1 hour
    res.status(200).send({ url, filename });
  } catch (error) {
    console.error("Error generating signed URL:", error.message); // Log the error message
    res.status(500).send({ error: "Error generating signed URL", details: error.message });
  }
});

module.exports = router;
