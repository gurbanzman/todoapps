"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateApps = exports.deleteApps = exports.postApps = exports.getApps = void 0;
const index_1 = require("../config/index");
// get apps
const getApps = async (req, res) => {
    try {
        const result = await index_1.pool.query("SELECT * FROM todoapps");
        res.render("index", { data: result.rows });
    }
    catch (error) {
        console.error(error);
    }
};
exports.getApps = getApps;
// post apps
const postApps = async (req, res) => {
    const { app } = req.body;
    const is_active = false;
    try {
        const result = await index_1.pool.query("INSERT INTO todoapps (app, is_active) VALUES ($1,$2) RETURNING *", [app, is_active]);
        return res.redirect("/");
    }
    catch (error) {
        console.error("Error occurred: ", error.message, error.stack);
        res.status(501).send("Something went wrong " + error.message);
    }
};
exports.postApps = postApps;
// delete apps
const deleteApps = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await index_1.pool.query("DELETE FROM todoapps WHERE id = $1 RETURNING *", [id]);
        return res.redirect("/");
    }
    catch (error) {
        console.error(error);
    }
};
exports.deleteApps = deleteApps;
// update apps
const updateApps = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await index_1.pool.query("SELECT * FROM todoapps WHERE id = $1", [
            id,
        ]);
        const currentIsActive = result.rows[0].is_active;
        const updatedIsActive = !currentIsActive;
        const updateResult = await index_1.pool.query("UPDATE todoapps SET is_active = $1 WHERE id = $2 RETURNING *", [updatedIsActive, id]);
        return res.redirect("/");
    }
    catch (error) {
        console.error(error);
    }
};
exports.updateApps = updateApps;
