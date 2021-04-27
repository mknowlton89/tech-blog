const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const blogData = await Post.findAll({
            include: [
                {
                    model: User,
                },
            ],
        });

        const blogPosts = blogData.map((post) => post.get({ plain: true }));

        console.log(blogPosts);

        res.render('home', {
            blogPosts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(400).json(err)
    };

});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const blogData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                    model: User,
                },
            ],
        });

        const blogPosts = blogData.map((post) => post.get({ plain: true }));

        console.log(blogPosts);

        res.render('dashboard', {
            blogPosts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(400).json(err);
    }

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

router.get('/create', withAuth, async (req, res) => {
    res.render('create', {
        loggedIn: req.session.loggedIn,
    })
});

module.exports = router;