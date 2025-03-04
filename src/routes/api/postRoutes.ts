import { Router } from 'express';
import { createPost, deletePost, getPosts } from '../../controllers/postController';

const router = Router();

// Handle post creation, post deletion, getting posts
router.post('/', createPost);
router.delete('/:id', deletePost);
router.get('/', getPosts);

export default router;

