import { pool } from "../config/index";

// get apps
const getApps = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM todoapps");
    res.render("index", { data: result.rows });
  } catch (error) {
    console.error(error);
  }
};

// post apps
const postApps = async (req, res) => {
  const { app } = req.body;
  const is_active = false;
  try {
    const result = await pool.query(
      "INSERT INTO todoapps (app, is_active) VALUES ($1,$2) RETURNING *",
      [app, is_active]
    );
    return res.redirect("/");
  } catch (error) {
    console.error("Error occurred: ", error.message, error.stack);
    res.status(501).send("Something went wrong " + error.message);
  }
};

// delete apps
const deleteApps = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM todoapps WHERE id = $1 RETURNING *",
      [id]
    );
    return res.redirect("/");
  } catch (error) {
    console.error(error);
  }
};

// update apps
const updateApps = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM todoapps WHERE id = $1", [
      id,
    ]);
    const currentIsActive = result.rows[0].is_active;
    const updatedIsActive = !currentIsActive;
    const updateResult = await pool.query(
      "UPDATE todoapps SET is_active = $1 WHERE id = $2 RETURNING *",
      [updatedIsActive, id]
    );
    return res.redirect("/");
  } catch (error) {
    console.error(error);
  }
};

export { getApps, postApps, deleteApps, updateApps };
