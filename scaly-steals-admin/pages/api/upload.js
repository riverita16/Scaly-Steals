import multiparty from 'multiparty';
import {PutObjectCommand, S3Client} from '@aws-sdk/client-s3';
import fs from 'fs';
import mime from 'mime-types';
import {mongooseConnect} from "@/lib/mongoose";
const bucketName = 'scalysteals';

export default async function handle(req,res) {
  await mongooseConnect();

  const form = new multiparty.Form();
  const {fields,files} = await new Promise((resolve,reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({fields,files});
    });
  });

  console.log('length:', files.file.length);

  const AWS = require('aws-sdk');
  const fs = require('fs');

  // Set the region and access keys
  AWS.config.update({
    region: 'us-east-1',
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
  });

  // Create a new instance of the S3 class
  const s3 = new AWS.S3();

  const links = [];
  for (const file of files.file) {
    // Set the parameters for the file you want to upload
    const ext = file.originalFilename.split('.').pop();
    const newFilename = Date.now() + '.' + ext;
    const params = {
      Bucket: bucketName,
      Key: newFilename,
      Body: fs.createReadStream(file.path),
      ACL: "public-read"
    };

    // Upload the file to S3
    s3.upload(params, (err, data) => {
        if (err) {
            console.log('Error uploading file:', err);
        } else {
            console.log('File uploaded successfully. File location:', data.Location);
        }
    });
    const link = `https://${bucketName}.s3.amazonaws.com/${newFilename}`;
    links.push(link);
  }
  return res.json({links});
}

export const config = {
  api: {bodyParser: false},
};