const express = require("express");
const router = require("./routes/post");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

data = [{ id: "12345678", title: "hello", post: "hello world" }];

router.get("/", (req, res) => {
    res.set("Content-Type", "application/json");
    res.send("Hello World");
});

app.use("/", router);
app.listen(3000);

module.exports = app;
