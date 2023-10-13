import express from 'express';
import pageController from "../controllers/page.controller.js";

const router = express.Router();

router
    .route('/')
    .get((pageController.allPages))
    .post(pageController.addPage);

router
    .route('/:id')
    .get(pageController.getPage)
    .post(pageController.updatePage)
    .delete(pageController.deletePage);


export default router;