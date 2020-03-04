import express, {Application, Request, Response, Errback} from 'express';
import router from './router';
import cors from 'cors';
require('./db/mongoose');

const app : Application = express();
const port : number = 3000;

app.use(express.json());
app.use(router);
app.use(cors())

app.listen(port, (err:Errback) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});