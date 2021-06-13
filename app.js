const express = require("express");
const router = require("./routes/post");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});

data = [{ id: "12345678", title: "hello", post: "hello world" }];

router.get("/", (req, res) => {
    res.set("Content-Type", "application/json");
    res.send("Hello World");
});

app.use("/", router);
app.listen(process.env.PORT || 5000)

module.exports = app;
