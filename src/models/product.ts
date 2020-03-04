import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fechaAlta: {
        type: String,
        required: true,
    }
});


const Product = mongoose.model('products', productSchema);

export default Product