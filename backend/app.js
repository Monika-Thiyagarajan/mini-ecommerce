const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const dotEnv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/connectDatabase');
dotEnv.config({path:path.join(__dirname,'config','config.env')});

const products = require('./routes/product');
const orders = require('./routes/order');

connectDatabase();

app.use(express.json())
app.use('/api/v1/',products);
app.use('/api/v1/',orders);

app.listen(process.env.PORT,()=>{
    console.log(`Server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})