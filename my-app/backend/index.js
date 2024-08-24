require('dotenv').config();
const express = require('express');
const mongodb = require('./db');
const  awsS3 = require("./awsS3");

const app = express();
const port = 5000;
mongodb();
awsS3();



app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(express.json());

// Use the FileUpload route
app.use('/api', require("./routes/FileUpload"));
app.use('/api', require("./routes/CreateUser"));
app.use('/api', require("./routes/FileDownload"));
app.use('/api', require("./routes/ListFile"));
//app.use('/api', require("./routes/Download"));
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


