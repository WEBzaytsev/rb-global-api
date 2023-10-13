import {DataTypes, Model} from 'sequelize';
import sequelize from '../index.js';

export default class Pages extends Model {
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
        defaultValue: 'page',
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    heading: DataTypes.STRING,
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: DataTypes.JSON,
    createdBy: {
        type: DataTypes.STRING,
        allowNull: false,
        // todo: set auth user
        defaultValue: 'user',
    },
    updatedBy: DataTypes.STRING,
}

const syncPages = async () => {
    await Pages.init(
        data,
        {
            sequelize,
            timestamps: true,
            modelName: 'Pages'
        },
    );

    await Pages.sync();
}

setTimeout(syncPages, 1000);
