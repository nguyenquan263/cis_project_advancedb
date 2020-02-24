var express = require('express');

var router = express.Router();

var blogs = [];

class Blog {
    constructor(id, name, content) {
        this.id = id;
        this.name = name;
        this.content = content;
    }
}

var currentBlog = new Blog(1, 'test blog', 'test content');

blogs.push(currentBlog);

router.get('/', (req, res) => {
    res.send(blogs);
});

module.exports = router;