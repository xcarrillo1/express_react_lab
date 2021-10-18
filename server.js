// IMPORT DEPENDENCIES ////////////////////////////////////////
const express = require("express");
const cors = require("cors")

// IMPORT JSON FILES ////////////////////////////////////////
const projects = require("./projects.json");
const about = require("./about.json");

// CREATE OUR APP OBJECT //////////////////////////////////////
const app = express();

// SET UP MIDDLEWARE /////////////////////////////////////////
app.use(cors());

// ROUTES - INDUCES ////////////////////////////////////////
// HOME ROUTE FOR TESTING OUR APP
app.get("/", (req, res) => {
    res.send("Home route is working");
});

// ROUTE FOR RETRIEVING PROJECTS
app.get("/projects", (req, res) => {
    // send projects via JSON
    res.json(projects);
});

// ROUTE FOR RETRIEVING ABOUT
app.get("/about", (req, res) => {
    // send about via JSON
    res.json(about);
});

// LISTENER
const PORT = process.env.PORT || 4000;
app.listen (PORT, () => {
    console.log("Express is running on", PORT);
});