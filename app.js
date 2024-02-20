
const express = require('express');
import bodyParser from 'body-parser';
import cors from 'cors';

import auth from './routes/auth'

import { mongoconnection } from './db';

const app = express()

console.log(Date.now(), "app");

mongoconnection();
app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("server listining on 8680")
})

app.use("/api/user", auth);
app.use("/api/auth", auth);


export default app;