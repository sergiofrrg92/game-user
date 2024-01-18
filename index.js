import express from "express";

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send("This is a get");
});

app.listen(PORT, () => {
    console.log("This is my express app")
});