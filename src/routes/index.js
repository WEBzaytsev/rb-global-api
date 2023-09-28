import express from 'express';
import postsRoute from './posts.route.js';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/posts',
    route: postsRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;