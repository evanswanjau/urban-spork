const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);

describe("Route Tests", function () {
    describe("Create post", function () {
        it("/create-post return 200 status response", function (done) {
            chai.request(app)
                .post("/create-post")
                .send({ title: "new_post", post: "this is a new post" })
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe("View all posts", function () {
        it("/posts return 200 status response", function (done) {
            chai.request(app)
                .get("/posts")
                .send({ title: "new_post", post: "this is a new post" })
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe("View single post", function () {
        it("/post/:post_id return 200 status response", function (done) {
            chai.request(app)
                .get("/post/12345678")
                .send({ title: "new_post", post: "this is a new post" })
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });
    
    describe("Update post", function () {
        it("/post/:post_id return 200 status response", function (done) {
            chai.request(app)
                .put("/post/12345678")
                .send({ title: "new_post", post: "this is a new post" })
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });
    
    describe("Delete post", function () {
        it("/post/:post_id return 200 status response", function (done) {
            chai.request(app)
                .delete("/post/12345678")
                .send({ title: "new_post", post: "this is a new post" })
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });
});
