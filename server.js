// import section

require("dotenv").config();
const express = require("express");
// const path = require('path');
const collection = require("./model/dbs");
const { name } = require("ejs");

// swapping

const app = express();
const port = 3000 || process.env.PORT;

// middlewares

app.use(express.json()); // json data handlers
app.use(express.urlencoded({ extended: false })); // form data handlers
app.set("view engine", "ejs"); // engine
app.use(express.static("./public"));

// rotues

app.use(require("./routes/index"));

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  await collection.insertMany([data]);
  res.render("signup");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userData = await collection.findOne({ email: email });

  if (userData && userData.password === password) {
    res.render("login", { username: userData.name });
  } else {
    console.log("Login failed: Email or password is incorrect");
    res.send("email or password wrong");
  }
});



app.get("*", (req, res) => {
  res.render("pagenotfound");
});
// SERVER LISTEN

app.listen(port, () => {
  console.log(`server start from localhost:${port}`);
});
