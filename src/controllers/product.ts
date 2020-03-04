import Product from "../models/product";

 export const getProducts = (req : any, res: any) => {
    Product.find().then(products => {
        res.send(products)
    }).catch(error => {
        return res.status(400).send({
            msg: 'Error at saving the move',
            error: error
        });
    })
}


export const updateProducts = (req : any, res: any) => {
    Product.find().then(products => {
        res.send(products)
    }).catch(error => {
        return res.status(400).send({
            msg: 'Error at saving the move',
            error: error
        });
    })
}