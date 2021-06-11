const express = require("express");
const post = require("../api/post");
const router = express.Router();

router.post("/create-post", (req, res) => {
    // include validations
    result = post.create_post(req.body.title, req.body.post, data);
    res.set("Content-Type", "application/json");
    res.send(result);
});

router.get("/posts", (req, res) => {
    result = post.view_all_posts(data);
    res.set("Content-Type", "application/json");
    res.send(result);
});

router.get("/post/:post_id", (req, res) => {
    result = post.view_single_post(req.params.post_id, data);
    res.set("Content-Type", "application/json");
    res.send({ body: result });
});

router.put("/post/:post_id", (req, res) => {
    result = post.update_post(
        req.params.post_id,
        req.body.title,
        req.body.post,
        data
    );
    res.set("Content-Type", "application/json");
    res.send({ body: result });
});

router.delete("/post/:post_id", (req, res) => {
    result = post.delete_post(req.params.post_id, data);
    res.set("Content-Type", "application/json");
    res.send({ body: result });
});

module.exports = router;
