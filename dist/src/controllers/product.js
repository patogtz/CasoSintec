"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("../models/product"));
exports.getProducts = (req, res) => {
    product_1.default.find()
        .then(products => {
        res.send(products);
    })
        .catch(error => {
        return res.status(400).send({
            msg: "Error at saving the product!",
            error: error
        });
    });
};
exports.createProduct = (req, res) => {
    const product = req.body;
    const newProduct = new product_1.default(product);
    newProduct.save(function (err, result) {
        let response;
        if (err) {
            response = { error: true, message: "Error adding data" };
        }
        else {
            response = { error: false, message: "Data added", result: result };
        }
        res.json(response);
    });
};
exports.updateProduct = (req, res) => {
    const id = req.params.id;
    console.log(req.body);
    product_1.default.findByIdAndUpdate(id, req.body)
        .then(product => {
        return res.send({
            msg: "product updated!",
            product
        });
    })
        .catch(err => {
        return res.status(400).send(err);
    });
};
exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    product_1.default.findByIdAndDelete(id)
        .then(product => {
        return res.send({
            msg: "product deleted properly",
            product: product
        });
    })
        .catch(err => {
        return res.status(400).send({
            msg: "Error, couldnt delete product",
            error: err
        });
    });
};
//# sourceMappingURL=product.js.map