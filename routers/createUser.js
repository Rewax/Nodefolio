const router = require("express").Router();
const connection = require("../database/database.js");

router.post("/createuser", (req, res) => {
  const { username, password } = req.body;
  try {
    connection.query(
        `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`,
      (error, result) => {
        if (error) throw error;
        if (result) {
          console.log(result);
        }
      }
    );
    res.send({ message: "user created", user: { username, password } });
  } catch (error) {
    console.log(error);
    res.send("error");
  }
});

module.exports = {
  router,
};