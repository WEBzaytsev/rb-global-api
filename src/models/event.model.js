import {DataTypes, Model} from 'sequelize';
import sequelize from '../index.js';

export default class Events extends Model {
}

const data = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    postType: {
        type: DataTypes.STRING,
        defaultValue: 'event',
        allowNull: false,
    },
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    place: DataTypes.STRING,
    url: DataTypes.STRING,
    isShow: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
}

const syncEvents = async () => {
    await Events.init(
        data,
        {
            sequelize,
            timestamps: true,
            modelName: 'Events'
        },
    );

    await Events.sync();
}

setTimeout(syncEvents, 1000);
