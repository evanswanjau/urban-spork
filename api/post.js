module.exports = {
    create_post: (title, post, data) => {
        try {
            new_post = {
                id: module.exports.generate_post_id(data),
                title: title,
                post: post,
            };
            data.push(new_post);
            return new_post;
        } catch (err) {
            throw err;
        }
    },
    view_all_posts: (data) => {
        try {
            return data;
        } catch (err) {
            throw err;
        }
    },
    view_single_post: (post_id, data) => {
        try {
            for (let i = 0; i < data.length; i++) {
                if (data[i]["id"] == post_id) {
                    return data[i];
                }
            }
            return "Post not found";
        } catch (err) {
            throw err;
        }
    },
    update_post: (post_id, title, post, data) => {
        try {
            for (let i = 0; i < data.length; i++) {
                if (data[i]["id"] == post_id) {
                    data[i]["title"] = title;
                    data[i]["post"] = post;
                    return data[i];
                }
            }
            return "Post not found";
        } catch (err) {
            throw err;
        }
    },
    delete_post: (post_id, data) => {
        try {
            for (let i = 0; i < data.length; i++) {
                if (data[i]["id"] == post_id) {
                    return data.splice(i, 1)[0];
                }
            }
            return "Post not found";
        } catch (err) {
            throw err;
        }
    },
    generate_post_id: (data) => {
        try {
            array = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }

            string = array.join("").substring(0, 10);

            for (let x = 0; x < data.length; x++) {
                if (data[x]["id"] == string) {
                    return modules.exports.generate_post_id(data);
                }
            }

            return string;
        } catch (err) {
            throw err;
        }
    },
};
