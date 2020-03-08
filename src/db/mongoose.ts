import mongoose from 'mongoose';

var connectionUrl = "mongodb+srv://patogtzc:" + `${process.env.DBPASSWORD}` + "@cluster0-pia7w.mongodb.net/caso_sintec?retryWrites=true&w=majority"
console.log(process.env.DBPASSWORD)
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
mongoose.set('useFindAndModify', false);