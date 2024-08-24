const express = require('express');
const router = express.Router();
const { S3Client, ListObjectsV2Command } = require('@aws-sdk/client-s3');

const s3Client = new S3Client({
  region: 'ap-south-1',
  credentials: {
    accessKeyId: global.AWS_ACCESS_KEY_ID,
    secretAccessKey: global.AWS_SECRET_ACCESS_KEY,
  },
});

const categorizeFile = (key) => {
  if (key.includes('/documents/')) return 'Document';
  if (key.includes('/image/')) return 'Image';
  if (key.includes('/video/')) return 'Video';
  return 'Other';
};

router.post('/list-files', async (req, res) => {
  try {
    const { email } = req.body;
    const params = {
      Bucket: 'shareease1',
      Prefix: `uploads/user-upload/${email}/`,
    };

    const data = await s3Client.send(new ListObjectsV2Command(params));
    const files = data.Contents.map((file) => ({
      Key: file.Key,
      Size: file.Size,
      type: categorizeFile(file.Key),
    }));

    res.json({ success: true, files });
  } catch (err) {
    console.error('Error listing files:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});


module.exports = router;
