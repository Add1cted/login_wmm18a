const express = require("express");

const coursesRoute = require("./courses");
const prereqsRoute = require("./prereqs");
const newcourseRoute = require("./newcourse");
const loginRoute = require("./login");
const router = express.Router();

module.exports = params => {
  router.get("/", (req, res) => {
    console.log("login.js /");
    res.render("pages/login", { pageTitle: "Welcome" });
  });

  router.get("/hello", (req, res) => {
    console.log("index.js /hello");
    res.render("pages/hello", {
      pageTitle: "Yo Hello",
      message: "Hey, Bubba!"
    });
  });

  router.use("/courses", coursesRoute(params));
  router.use("/prereqs", prereqsRoute(params));
  router.use("/newcourse", newcourseRoute(params));
  router.use("/login", loginRoute(params));

  return router;
};
