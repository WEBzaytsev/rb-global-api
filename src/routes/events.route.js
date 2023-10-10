import express from 'express';
import eventsController from "../controllers/events.controller.js";

const router = express.Router();

router
    .route('/')
    .get((eventsController.allEvents))
    .post(eventsController.addEvent);

router
    .route('/:id')
    .get(eventsController.getEvent)
    .post(eventsController.updateEvent)
    .delete(eventsController.deleteEvent);


export default router;