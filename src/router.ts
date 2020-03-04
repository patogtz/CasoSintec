import express, {Request, Response} from 'express';
const router = express.Router();
import cors from 'cors';
import {getProducts, updateProducts} from './controllers/product'

/* import auth from './middleware/auth';
import moves from './controllers/moves'; */

router.all('*', cors());

router.get('/', (req : Request, res : Response) => {
    res.json({
        info: "Welcome to Patricio's Sintec case API"
    });
});

router.get('/products', getProducts);


export default router