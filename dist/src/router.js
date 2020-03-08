"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const cors_1 = __importDefault(require("cors"));
const product_1 = require("./controllers/product");
/* import auth from './middleware/auth';
import moves from './controllers/moves'; */
router.all('*', cors_1.default());
router.get('/', (req, res) => {
    res.json({
        info: "Welcome to Patricio's Sintec case API"
    });
});
router.get('/products', product_1.getProducts);
router.post('/product', product_1.createProduct);
router.put('/product/:id', product_1.updateProduct);
router.delete('/product/:id', product_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=router.js.map