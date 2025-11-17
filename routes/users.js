const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("User List");
});

router.get('/new', (req, res) => {
    res.send('New');
});

router.post('/', (req, res) => {
    //res.send("user Created!");
    res.render(`user/list`, {users:users});
});
    const firstName = req.body.firstName;
    const isValid = firstName !== ""; //Check if they are there, added 
    if (isValid) {
        console.log(`Adding User: ${firstName}`);
        users.push({ name: firstName });
        console.log(`New Set of Users: ${users}`);
        res.send("User Created!");
    } else {
        console.log("Error adding user!");
        res.render("users/new", { firstName: firstName });
    }
    // Handle post request

router.route("/:id")
    .get((req, res) => {
        res.send(`Getting User data: ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Deleting User data: ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Updating User data: ${req.params.id}`);
    });
router.param("id", (req, res, next, id) => {
    console.log(`Accessing user #${id}`);
    next();
});

const users = [{ name: "George" }, { name: "Justyna" }];
router.param("id", (req, res, next, id) => {
    console.log(`Accessing user #${id}`);
    next();
})

module.exports = router;
