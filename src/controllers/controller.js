const services = require("../services/service");
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

const InitPage = (req, res) => {
    res.send("Hello, I'm Mario Salazar!");
};

const getAllObjects = (req, res) => {
    pool.query(
        "select * from gender g inner join person p on p.gender = g.id_gender inner join users_centenario u on u.person = p.id_person inner join rol_user ru on ru.id_rol = u.rol_user where u.user_delete = 'True' order by u.id_user desc;",
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        }
    );
};

const getOneObject = (req, res) => {
    pool.query("select * from person order by id_person desc;", (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const createNewObject = (req, res) => {
    res.send("Create New Object");
};

const updateObject = (req, res) => {
    res.send("Update Object");
};

const deleteObject = (req, res) => {
    res.send("Delete Object");
};

module.exports = {
    getAllObjects,
    getOneObject,
    createNewObject,
    updateObject,
    deleteObject,
    InitPage,
};
