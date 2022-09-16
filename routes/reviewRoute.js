const reviewController = require('../controllers/reviewController');

const router = require('express').Router();

router.post('/addRating', reviewController.addReview);
router.get('/allReview', reviewController.getAllReviews);
router.get('/:id', reviewController.getOneReview);
router.put('/:id', reviewController.updateReview);
router.delete('/:id', reviewController.deleteOneReview);


module.exports = router; 