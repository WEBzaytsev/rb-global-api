import {transliterate} from "transliteration";
import Pages from "../models/page.model.js";

const createSlug = (title) => {
    const lowercaseTitle = title.toLowerCase();
    const latinTitle = transliterate(lowercaseTitle);

    return latinTitle
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

const createPage = async (newPageData) => {
    const {heading, content, updatedBy, title, createdBy} = newPageData;
    const slug = createSlug(title);

    console.log('slug', slug)
    setTimeout(async () => {
        const newPage = await Pages.build({heading, content, updatedBy, title, createdBy, slug});
        await newPage.save();
    }, 1000);
};

const getPage = async (params) => {
    return await Pages.findOne({
        where: {
            id: params.id,
        }
    });
}

const updatePage = async (postBody, postParams) => {
    const {id} = postParams;
    const {content, title} = postBody;
    await Pages.update({
        title,
        content
    }, {
        where: {
            id
        }
    });
}

const deletePage = async (params) => {
    const {id} = params;
    const page = await Pages.findOne({
        where: {
            id
        }
    });
    await page.destroy();
}

const getAllPages = async () => {
    const pagesList = await Pages.findAll();
    const pagesArray = [];

    pagesList.map((item) => {
        pagesArray.push(item.dataValues);
    });

    return pagesArray;
}


export default {
    createPage,
    getPage,
    updatePage,
    deletePage,
    getAllPages
}