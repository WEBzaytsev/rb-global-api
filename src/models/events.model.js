import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../index.js';

export default class Events extends Sequelize.Model {}
setTimeout(async() => {
    await Events.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: true,
            },
            number: {
                type: DataTypes.INTEGER,
            },
            date: {
                type: DataTypes.DATE,
            },
            url: {
                type: DataTypes.STRING,
            },
            isShow: {
                type: DataTypes.BOOLEAN,
            },
            place: {
                type: DataTypes.STRING,
            }
        },
        { 
            sequelize, 
            timestamps: false,
            modelName: 'Events'
        },
    );

    await Events.sync();
}, 1000);