const router = require('express').Router();
// make my end points, make a comment.
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/blogs', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;