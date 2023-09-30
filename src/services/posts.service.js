import Posts from "../models/posts.model.js";

const createPost = async (userBody) => {
    const {content, title} = userBody;
    setTimeout(async() => {
        const newPost = await Posts.build({title, content});
        console.log(newPost);
        await newPost.save();
    }, 1000);
};

const getPost = async (params) => {
    const {postId} = params;
    const post = await Posts.findOne({
        where: { 
            postId: postId
        }
    });
    return post;
}


const updatePost = async (postBody, postParams) => {
    const {postId} = postParams;
    const {content, title} = postBody;
    const post = await Posts.update({
        title,
        content
    },{
        where: { 
            postId: postId
        }
    });
}

const deletePost = async (params) => {
    const {postId} = params;
    const post = await Posts.findOne({
        where: { 
            postId: postId
        }
    });
    await post.destroy();
}

const getAllPosts = async () => {
    const listPosts = await Posts.findAll();
    const arrPost = [];
    await listPosts.map((item) => {
        arrPost.push(item.dataValues);
    })
    return arrPost;
}


export default {
    createPost,
    getPost,
    updatePost,
    deletePost,
    getAllPosts
}