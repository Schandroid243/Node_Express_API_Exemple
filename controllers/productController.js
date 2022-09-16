const db = require('../models/');

//create main model

const Product = db.products;
const Review = db.reviews;

//main work

//1. create the product

const addProduct = async (req, res) => {
    
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }
    try {
        const product = await Product.create(info);
        res.status(201).json(product);
        console.log(product);
    } catch (error) {
        console.log(error);
    }
    
}

//2. get all products

const getAllProducts = async (req, res) => {
    let products = await Product.findAll({});
    res.status(200).send(products);
}

//3. get one product

const getOneProduct = async (req, res) => {
    let id = req.params.id;
    let product = await Product.findOne({ where: {id: id}});
    res.status(200).send(product);
}

//4. update one product

const updateOneProduct = async (req, res) => {
    let id = req.params.id;
    const product = await Product.update(req.body, { where: {id: id}});
    res.status(200).send(product);
}

//5. delete one product

const deleteOneProduct = async (req, res) => {
    let id = req.params.id;
    await Product.destroy({ where: {id: id}});
    res.status(200).send({message: 'Product deleted successfully.'});
}

//6. delete one product

const getPublishedProduct = async (req, res) => {
    const products = await Product.findAll({ where: {published: true}});
    res.status(200).send(products);
}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateOneProduct,
    deleteOneProduct,
    getPublishedProduct
}