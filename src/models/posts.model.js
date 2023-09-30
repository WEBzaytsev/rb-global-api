import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../index.js';


export default class Posts extends Sequelize.Model {}
setTimeout(async() => {
    await Posts.init(
        {
            postId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            content: {
                type: DataTypes.JSON
            }
        },
        { 
            sequelize, 
            timestamps: false,
            modelName: 'Posts'
        },
    );

    await Posts.sync();
}, 1000);