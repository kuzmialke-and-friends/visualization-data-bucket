# Visualization Data Bucket

[![Build Status](https://travis-ci.com/kuzmialke-and-friends/visualization-data-bucket.svg?branch=main)](https://travis-ci.com/kuzmialke-and-friends/visualization-data-bucket)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Core Concepts](#core-concepts)
- [Getting started](#getting-started)
- [API](#api)

## Core Concepts

This repository is meant to serve as a temporary replacement for a databse or an S3 bucket. It is hosted on Heroku and
serves JSON used for visualization.

[Heroku preview](https://knf-visualization-data-bucket.herokuapp.com)

## Getting started

### Clone the repository and go inside it

```bash
git clone https://github.com/kuzmialke-and-friends/visualization-data-bucket
cd visualization-data-bucket
```

### Check node&npm version and install dependencies

```bash
nvm use
npm i
```

### Start development server

```bash
npm run start:dev
```

## API

### Endpoints

#### Datasets

`/assets/:dataset/:id` - tries to read a json and return it with 200, or 404 if it fails.

Examples:

```
https://knf-visualization-data-bucket.herokuapp.com/assets/biraffe/ghostStaticMap.json
https://knf-visualization-data-bucket.herokuapp.com/assets/biraffe/ghost.json
https://knf-visualization-data-bucket.herokuapp.com/assets/biraffe/jump.json
```

#### Health

`/health` - health check, 200 with body `Ok`.
