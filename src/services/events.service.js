import Events from "../models/events.model.js";

const createEvent = async (userBody) => {
    const {number, date, url, isShow, place} = userBody;

    setTimeout(async () => {
        const newEvent = await Events.build({number, date, url, isShow, place});
        await newEvent.save();
    }, 1000);
};

const getEvent = async (params) => {
    const {id} = params;
    return await Events.findOne({
        where: {id}
    });
}


const updateEvent = async (postBody, postParams) => {
    const {id} = postParams;
    const {number, date, url, isShow, place} = postBody;
    await Events.update({number, date, url, isShow, place}, {
        where: {id}
    });
}

const deleteEvent = async (params) => {
    const {id} = params;
    const event = await Events.findOne({
        where: {id}
    });
    await event.destroy();
}

const getAllEvents = async () => {
    const eventsList = await Events.findAll();
    const arrEvent = [];
    await eventsList.map((item) => {
        arrEvent.push(item.dataValues);
    });
    return arrEvent;
}


export default {
    createEvent,
    getEvent,
    updateEvent,
    deleteEvent,
    getAllEvents
}