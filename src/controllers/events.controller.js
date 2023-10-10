import catchAsync from '../utils/catchAsync.js';
import eventsService from "../services/events.service.js";
import httpStatus from 'http-status';

const addEvent = catchAsync(async (req, res) => {
    const event = await eventsService.createEvent(req.body);
    res.status(httpStatus.CREATED).send(event);
});

const getEvent = catchAsync(async (req, res) => {
    const event = await eventsService.getEvent(req.params);
    res.status(httpStatus.OK).send(event.dataValues);
});

const updateEvent = catchAsync(async (req, res) => {
    await eventsService.updateEvent(req.body, req.params);
    res.status(httpStatus.OK).send({
        success: true
    });
});

const deleteEvent = catchAsync(async (req, res) => {
    await eventsService.deleteEvent(req.params);
    res.status(httpStatus.OK).send({
        success: true
    })
});

const allEvents = catchAsync(async (req, res) => {
    const event = await eventsService.getAllEvents();
    res.status(httpStatus.OK).send(event);
});


export default {
    addEvent,
    getEvent,
    updateEvent,
    deleteEvent,
    allEvents
};