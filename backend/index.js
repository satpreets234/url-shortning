const express =require('express');
const { config }= require('dotenv');
const  sequelize  =require('./connection/connection');
const  cors = require("cors");
config();
const port = process.env.PORT || 5100;

const app = express();
const indexRouter=require('./routers/index-router');
// Middleware to parse JSON in request bodies
app.use(cors());
app.use(express.json());
app.use('/api',indexRouter);

// Connect to database
sequelize.authenticate()
  .then(() => {
    // Start server and log a message when it's ready
    app.listen(port, () => {
      console.log(`url shortener backend running on ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to database:', error);
  });