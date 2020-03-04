import mongoose from 'mongoose';
var connectionUrl = "mongodb+srv://patogtzc:nKKQzsOximU4El1k@cluster0-pia7w.mongodb.net/caso_sintec?retryWrites=true&w=majority"

mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
mongoose.set('useFindAndModify', false);