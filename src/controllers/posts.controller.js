import catchAsync from '../utils/catchAsync.js';
import postsService from '../services/posts.service.js';
import httpStatus from 'http-status';

const addPost = catchAsync(async (req, res) => {
  console.log(req.body);
  const post = await postsService.createPost(req.body);
  res.status(httpStatus.CREATED).send(post);
});

const getPost = catchAsync(async (req, res) => {
  const post = await postsService.getPost(req.params);
  res.status(httpStatus.OK).send(post.dataValues);
});

const updatePost = catchAsync(async (req, res) => {
  console.log(req.body, req.params);
  const post = await postsService.updatePost(req.body, req.params);
  res.status(httpStatus.OK).send({
    success: true
  });
});

const deletePost = catchAsync(async (req, res) => {
  const post = await postsService.deletePost(req.params);
  res.status(httpStatus.OK).send({
    success: true
  })
});

const allPosts = catchAsync(async (req, res) => {
  const post = await postsService.getAllPosts();
  res.status(httpStatus.OK).send(post);
});


export default {
  addPost,
  getPost,
  updatePost,
  deletePost,
  allPosts
};