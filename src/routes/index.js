import express from 'express';
import postsRoute from './posts.route.js';
import eventsRoute from "./events.route.js";

const router = express.Router();

const defaultRoutes = [
  {
    path: '/posts',
    route: postsRoute,
  },
  {
    path: '/events',
    route: eventsRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;