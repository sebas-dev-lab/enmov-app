const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");
const {
  AWS_ACCESS_KEY,
  AWS_SECRET_KEY,
  AWS_REGION,
  BUCKET,
} = require("../config/_env");

const storage = new S3({
  region: AWS_REGION,
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
});

const getBuckets = () => {
  return storage.listBuckets().promise();
};

const uploadToBucket = (file) => {
  const stream = fs.createReadStream(file.path);
  const params = {
    Bucket: BUCKET,
    Key: file.filename,
    Body: stream,
  };
  return storage.upload(params).promise();
};

const deleteFiles = (files) => {
  let objects = [];
  for (let file in files) {
    let keys = {
      Key: files[file].tag_id,
    };
    objects.push(keys);
  }
  let params = {
    Bucket: BUCKET,
    Delete: {
      Objects: objects,
      Quiet: false,
    },
  };

  return storage.deleteObjects(params).promise();
};

module.exports = {
  getBuckets,
  uploadToBucket,
  deleteFiles,
};
