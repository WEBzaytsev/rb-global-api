import express from 'express';
import postsController from '../controllers/posts.controller.js';

const router = express.Router();

router
    .route('/')
    .get((postsController.allPosts))
    .post(postsController.addPost);

router
    .route('/:postId')
    .get(postsController.getPost)
    .post(postsController.updatePost)
    .delete(postsController.deletePost);


export default router;