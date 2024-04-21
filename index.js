import express from "express";
const app = express();
import pagesRoute from "./src/routes/index.js";
import * as dotenv from 'dotenv';
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 5001;

app.use('/pages', pagesRoute);


app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

