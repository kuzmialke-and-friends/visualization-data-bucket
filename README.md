# Visualization Data Bucket

[![Build Status](https://travis-ci.com/kuzmialke-and-friends/visualization-data-bucket.svg?branch=main)](https://travis-ci.com/kuzmialke-and-friends/visualization-data-bucket)

[Heroku preview](https://knf-visualization-data-bucket.herokuapp.com)

This repository is meant to serve as a free replacement for an S3 bucket. It is hosted on Heroku and
serves JSON used for visualization.

## Endpoints

### Datasets

`/datasets/:dataset/:id` - tries to read a json and return it with 200, or 404 if it fails.

Examples:

```
https://knf-visualization-data-bucket.herokuapp.com/datasets/biraffe/ghostStaticMap.json
https://knf-visualization-data-bucket.herokuapp.com/datasets/biraffe/ghost.json
https://knf-visualization-data-bucket.herokuapp.com/datasets/biraffe/jump.json
```

### Health

`/health` - health check, 200 with body `Ok`.
