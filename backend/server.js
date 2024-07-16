require('dotenv').config();

const exp = require('express');
const app = exp();

const mongoose = require('mongoose');

app.use(exp.json());

app.get('/',(req,res)=>{res.render('')})

mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{console.log(`Listening at port ${process.env.PORT}`)})
}).catch(err=>{console.log(err)});

