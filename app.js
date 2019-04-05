const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000
const app = express()

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin123@facialrecdataset-umcor.mongodb.net/facialrecdataset?ssl=true&authSource=admin";
const client = new MongoClient(uri, { useNewUrlParser: true });

exports.express = express
exports.path = path
exports.port = port
exports.app = app
exports.client = client;
