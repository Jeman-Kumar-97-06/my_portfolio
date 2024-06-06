const exp = require('express');
const app = exp();

app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.use((req,res)=>{
    res.render('404')
})

app.listen(3000,()=>{console.log("listening at 3000")});