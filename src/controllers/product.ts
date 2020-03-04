import Product from "../models/product";

export const getProducts = (req: any, res: any) => {
  Product.find()
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

export const createProduct = (req: any, res: any) => {
  const product = req.body;
  const newProduct = new Product(product);
  newProduct
    .save()
    .then(() => {
      return res.send({
        msg: "product saved properly!",
        product: product
      });
    })
    .catch(error => {
      return res.status(400).send({
        msg: "Error at saving the product",
        error: error
      });
    });
};

export const updateProduct = (req: any, res: any) => {
  const id = req.params.id;
  console.log(req.body);
  Product.findByIdAndUpdate(id, req.body)
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
export const deleteProduct = (req: any, res: any) => {
const id = req.params.id;
    Product.findByIdAndDelete(id)
        .then(product => {
            return res.send({
                msg: 'product deleted properly',
                product: product
            });
        }).catch(err => {
            return res.status(400).send({
                msg: 'Error, couldnt delete product',
                error: err
            });
        });
    }
