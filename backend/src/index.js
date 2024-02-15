const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes");

require('dotenv').config()

app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());


const PORT = process.env.PORT || 3000;
const URL = process.env.MONGO_URL || 'mongodb://localhost:27017/database';

app.get('/', (req, res) => {
    return res.send("The backend is working.").status(200)
});


app.use("/v1", router);

app.use((req, res, next) => {
    res.status(404).send("API not available.")
});

mongoose.connect(URL).then(() => {
    console.log("Connected to DB.")
}).catch(error => {
    console.log(error);
})
app.listen(PORT, () => {
    console.log("The backend is running at " + PORT);
});
