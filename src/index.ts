import express, {Application, Request, Response, Errback} from 'express';
import router from './router';
import cors from 'cors';
require("dotenv").config();
require('./db/mongoose');

const app : Application = express();
const port : number | string = process.env.PORT || 3000;
app.use(express.json());
app.use(router);
app.use(cors())

app.listen(port, function() {
  console.log(`Server up running on port ${port}`);
})