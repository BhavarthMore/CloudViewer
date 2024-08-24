const express = require('express');
const router = express.Router();
const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

// Initialize the S3 client
const s3Client = new S3Client({
  region: 'ap-south-1', // Replace with your S3 region
  credentials: {
    accessKeyId: global.AWS_ACCESS_KEY_ID, // Ensure these are set in your environment
    secretAccessKey: global.AWS_SECRET_ACCESS_KEY,
  },
});

router.post('/download-url', async (req, res) => {
  try {
    const { userMail, filename, contentType } = req.body;

    let content = '';
    if (contentType === 'Document'){
      content = 'documents'
    }
    if (contentType === 'Image'){
      content = 'image'
    }
    if (contentType === 'Video'){
      content = 'video'
    }

    // Use "documents" here to match the actual key in S3
    const key = `uploads/user-upload/${userMail}/${content}/${filename}`;
    console.log('Generated key:', key);

    const command = new GetObjectCommand({
      Bucket: "shareease1",
      Key: key,
    });

    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    res.status(200).send({ url });
  } catch (error) {
    console.error("Error generating download URL:", error.message);
    res.status(500).send({ error: "Error generating download URL", details: error.message });
  }
});



module.exports = router;
