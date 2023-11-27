const express =require('express');
const { config }= require('dotenv');
const  {connection}  =require('./connection/connection');
const  cors = require("cors");
const path=require('path');
config();
const port = process.env.PORT || 5100;
connection()
const app = express();
const indexRouter=require('./routers/index-router');
// Middleware to parse JSON in request bodies
app.use(cors());
app.use(express.json());
app.use('/api',indexRouter);
app.use('/uploads',express.static(path.resolve(__dirname, 'uploads/qrImages')));
require('./models/actor-model')
require('./models/movie-model')
require('./models/aavie-mxctor')
// Connect to database


  app.listen(port, () => {
    console.log(`url shortener backend running on ${port}`);
  });
