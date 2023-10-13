import express from 'express';
import eventsRoute from "./event.route.js";
import pageRoute from "./page.route.js";

const router = express.Router();

const defaultRoutes = [
    {
        path: '/pages',
        route: pageRoute,
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