"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = require("../../controllers/postController");
const router = (0, express_1.Router)();
// Handle post creation, post deletion, getting posts
router.post('/', postController_1.createPost);
router.delete('/:id', postController_1.deletePost);
router.get('/', postController_1.getPosts);
exports.default = router;
