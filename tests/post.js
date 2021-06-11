const expect = require("chai").expect;
const post = require("../api/post");

test_data = [
    { id: "12345678", title: "hello", post: "hello world" },
    { id: "12345679", title: "test", post: "this is a test" },
    { id: "12345670", title: "bye", post: "bye world" },
];

describe("Post Tests", function () {
    describe("Create post", function () {
        it("should create a new post", function () {
            new_post = post.create_post("Piano", "Plays music", test_data);
            expect(new_post).to.be.a("object");
            expect(new_post["title"]).to.equal("Piano");
        });
    });

    describe("View all posts", function () {
        it("should view all posts", function () {
            posts = post.view_all_posts(test_data);
            expect(posts).to.be.a("array");
        });
    });

    describe("View single post", function () {
        it("should view one single post", function () {
            single_post = post.view_single_post("12345678", test_data);
            expect(single_post).to.be.a("object");
            expect(single_post["title"]).to.equal("hello");
        });
    });

    describe("Update post", function () {
        it("should update post", function () {
            updated_post = post.update_post(
                "12345679",
                "updated",
                "updated data",
                test_data
            );
            expect(updated_post).to.be.a("object");
            expect(updated_post["title"]).to.equal("updated");
        });
    });

    describe("Delete post", function () {
        it("should delete post", function () {
            deleted_post = post.delete_post("12345670", test_data);
            expect(deleted_post).to.be.a("object");
            expect(deleted_post["title"]).to.equal("bye");
        });
    });

    describe("Genereate post_id", function () {
        it("should genereate post_id", function () {
            post_id = post.generate_post_id(test_data);
            expect(post_id).to.be.a("string");
            expect(post_id).to.have.lengthOf(10);
        });
    });
});
