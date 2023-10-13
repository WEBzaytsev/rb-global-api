import catchAsync from '../utils/catchAsync.js';
import pageService from '../services/page.service.js';
import httpStatus from 'http-status';

const addPage = catchAsync(async (req, res) => {
    const page = await pageService.createPage(req.body);
    res.status(httpStatus.CREATED).send(page);
});

const getPage = catchAsync(async (req, res) => {
    const page = await pageService.getPage(req.params);
    res.status(httpStatus.OK).send(page.dataValues);
});

const updatePage = catchAsync(async (req, res) => {
    await pageService.updatePage(req.body, req.params);
    res.status(httpStatus.OK).send({
        success: true
    });
});

const deletePage = catchAsync(async (req, res) => {
    await pageService.deletePage(req.params);
    res.status(httpStatus.OK).send({
        success: true
    })
});

const allPages = catchAsync(async (req, res) => {
    const pages = await pageService.getAllPages();
    res.status(httpStatus.OK).send(pages);
});


export default {
    addPage,
    getPage,
    updatePage,
    deletePage,
    allPages
};