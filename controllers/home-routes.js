const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('home')
});

router.get('/dashboard', async (req, res) => {
    res.render('dashboard')
});

router.get('/login', async (req, res) => {
    res.render('login')
});

router.get('/logout', async (req, res) => {
    res.render('logout')
});

router.get('/signup', async (req, res) => {
    res.render('signup')
});
module.exports = router;