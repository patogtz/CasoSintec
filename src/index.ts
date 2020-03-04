import express, {Application, Request, Response, Errback} from 'express';
import router from './router';
import cors from 'cors';
import mongoose from 'mongoose';


const app : Application = express();
const port : number = 3000;
var connectionUrl = "mongodb+srv://patogtzc:nKKQzsOximU4El1k@cluster0-pia7w.mongodb.net/caso_sintec?retryWrites=true&w=majority"

mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
mongoose.set('useFindAndModify', false);
app.use(express.json());
app.use(router);
app.use(cors())

app.listen(port, (err:Errback) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});