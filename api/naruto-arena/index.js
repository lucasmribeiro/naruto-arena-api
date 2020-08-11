const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const connectionString = 'mongodb+srv://default:default@cluster0.tvhna.gcp.mongodb.net/narutoarena?retryWrites=true&w=majority';

const app = express();
app.use(express.json());

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/models');

const User = mongoose.model('User');

app.use('/api', require('./src/routes'));
app.listen(8080);