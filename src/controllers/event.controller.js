import catchAsync from '../utils/catchAsync.js';
import eventService from "../services/event.service.js";
import httpStatus from 'http-status';

const addEvent = catchAsync(async (req, res) => {
    const event = await eventService.createEvent(req.body);
    res.status(httpStatus.CREATED).send(event);
});

const getEvent = catchAsync(async (req, res) => {
    const event = await eventService.getEvent(req.params);
    res.status(httpStatus.OK).send(event.dataValues);
});

const updateEvent = catchAsync(async (req, res) => {
    await eventService.updateEvent(req.body, req.params);
    res.status(httpStatus.OK).send({
        success: true
    });
});

const deleteEvent = catchAsync(async (req, res) => {
    await eventService.deleteEvent(req.params);
    res.status(httpStatus.OK).send({
        success: true
    })
});

const allEvents = catchAsync(async (req, res) => {
    const event = await eventService.getAllEvents();
    res.status(httpStatus.OK).send(event);
});


export default {
    addEvent,
    getEvent,
    updateEvent,
    deleteEvent,
    allEvents
};