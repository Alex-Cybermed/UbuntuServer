//nodejs-admin
//9SPL6jGkufm3OrBt

const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const port = 3000;

dotenv.config();

//connection to DB
mongoose.connect(
    process.env.DB_conncetion,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("connected to DB!");
    }
);

app.use(express.json());
app.use("/api/user", authRoute);

app.listen(port, () => console.log(`Server up and listening port: ${port}`));
