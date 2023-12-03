// import section

const router = require('express').Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get('/login', (req, res) => {
    res.render("signup.ejs");
});

router.get('/signup', (req, res) => {
    res.render('signup.ejs')
});





module.exports = router