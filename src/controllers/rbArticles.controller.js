import catchAsync from '../utils/catchAsync.js';
import rbArticlesService from "../services/rbArticles.service.js";
import httpStatus from 'http-status';

const allArticles = catchAsync(async (req, res) => {
    const articles = await rbArticlesService.getArticles(req.params);
    res.status(httpStatus.OK).send(articles);
});


export default {allArticles}