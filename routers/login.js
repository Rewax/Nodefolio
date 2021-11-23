const router = require("express").Router();
const connection = require("../database/database.js");

router.post("/login", (req,res) => {
    console.log(req.body);

    /* const usetable = `select '${username}' from username`;
        connection.query(query) */

    const {username, password} = req.body
    const query = `select * where username='${username}'`;
    const result = connection.query(query);
    console.log(result);
    res.send();
});

module.exports = {
    router
};