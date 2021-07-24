require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  DB: process.env.DB,
  SECRET: process.env.SECRET,
  // S3
  AWS_REGION: process.env.AWS_REGION,
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
  BUCKET: process.env.BUCKET,
};
