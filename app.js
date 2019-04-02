const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000
const app = express()

exports.express = express
exports.path = path
exports.port = port
exports.app = app
