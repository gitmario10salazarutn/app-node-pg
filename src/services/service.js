require("dotenv").config();
const { Pool, Client } = require("pg");

const credentials = {
    host: process.env.POSTGRESQL_ADDON_HOST,
    database: process.env.POSTGRESQL_ADDON_DB,
    user: process.env.POSTGRESQL_ADDON_USER,
    port: process.env.POSTGRESQL_ADDON_PORT,
    password: process.env.POSTGRESQL_ADDON_PASSWORD,
};

const pool = new Pool(credentials);

const getAllObjects = (request, response) => {
    return;
};

console.log(getAllObjects());

const getOneObject = () => {
    return;
};
const createNewObject = () => {
    return;
};
const updateObject = () => {
    return;
};
const deleteObject = () => {
    return;
};

module.exports = {
    getAllObjects,
    getOneObject,
};
