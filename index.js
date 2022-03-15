const express = require('express');
const mongoose = require('mongoose');
const routerApi = require('./routes');
const app = express();
const port = 3000;
require('dotenv').config();

app.listen(port, () => console.log("Listening in the port ", port));

app.use(express.json());

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log("Success connection with mongo"))
    .catch((error) => console.log(error));

routerApi(app);