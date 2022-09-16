const db = require('../models');

const Review = db.reviews;


const addReview = async (req, res) => {
    let info = {
        rating: req.body.rating,
        description: req.body.description
    }

    try {
        const review = await Review.create(info);
        res.status(201).json(review);
        console.log(review);
    } catch (error) {
        console.log(`Erreur: ${error}`);
    }
}


const getAllReviews = async (req, res) => {
    try {
        let reviews = await Review.findAll({});
        res.status(200).json(reviews);
        console.log(reviews);
    } catch (error) {
        console.log(`Erreur: ${error}`);
    }
}

const getOneReview = async (req, res) => {
    let id = req.params.id;
    try {
        let review = await Review.findOne({where: {id: id}});
        res.status(200).json(review);
        console.log(review);
    } catch (error) {
        console.log(`Erreur: ${error}`);
    }
}

const updateReview = async (req, res) => {
    let id = req.params.id;
    try {
        const review = await Review.update(req.body, {where: {id: id}});
        res.status(200).json(review);
        console.log(review);
    } catch (error) {
        console.log(`Erreur: ${error}`);
    }
}

const deleteOneReview = async (req, res) => {
    let id = req.params.id;
    try {
        const review = await Review.destroy({ where: {id: id}});
        res.status(200).json({message: 'Review successfully deleted'});
        console.log(review);
    } catch (error) {
        console.log(`Erreur: ${error}`);
    }
}


module.exports = {
    addReview,
    getAllReviews,
    getOneReview,
    updateReview,
    deleteOneReview
}