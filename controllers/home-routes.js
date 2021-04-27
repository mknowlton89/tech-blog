const router = require('express').Router();
const { Post, User, Comment } = require('../models');


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

router.get('/dashboard', async (req, res) => {
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
            blogPosts
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

router.get('/create', async (req, res) => {
    res.render('create')
});

// router.get('/create', async (req, res) => {
//     res.render('create')
// });

module.exports = router;