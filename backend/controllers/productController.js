const productModel = require('../models/productModel')

//get all products API - api/v1/products
exports.getProducts = async (req, res, next) => {
    const conditions = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}
    const products = await productModel.find(conditions);
    res.json({
        success: true,
        products: products,
        message: "Get Products Working!"
    })
}
//get single product API - api/v1/product/id
exports.getSingleProduct = async (req, res, next) => {
    try {
        const product = await productModel.findById(req.params.id)
        res.json({
            success: true,
            product: product,
            message: "Get Single Product Working"
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success: false,
            product: {},
            message: "Single product api failed"
        })
    }
}