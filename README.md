# Visualization Data Bucket

This repository is meant to serve as a free replacement for an S3 bucket. It is hosted on Heroku and
serves JSON used for visualization.

## Endpoints

`/datasets/:dataset/:id` - tries to read a json and return it with 200, or 404 if it fails
