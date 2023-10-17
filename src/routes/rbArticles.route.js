import express from 'express';
import rbArticlesController from "../controllers/rbArticles.controller.js";

const router = express.Router();

router
    .route('/limit/:limit/tag/:tag')
    .get((rbArticlesController.allArticles));


export default router;