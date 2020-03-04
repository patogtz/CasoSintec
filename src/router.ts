import express, {Request, Response} from 'express';
const router = express.Router();
import cors from 'cors';
import {getProducts, createProduct, updateProduct, deleteProduct} from './controllers/product'

/* import auth from './middleware/auth';
import moves from './controllers/moves'; */

router.all('*', cors());

router.get('/', (req : Request, res : Response) => {
    res.json({
        info: "Welcome to Patricio's Sintec case API"
    });
});


router.get('/products', getProducts);
router.post('/product', createProduct)
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router