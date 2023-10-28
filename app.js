const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogroutes');
const { result } = require('lodash');
const { render } = require('ejs');
//express app
const app  = express();
//connect to mongodb
const dbURI = 'My db URL';
mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true}).then((result) => app.listen(3000)
).catch((err)=>console.log(err));
//register view engine
app.set('view engine', 'ejs');

//midlware & static files (css, images...)
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.get('/', (req, res)=>{
    res.redirect('/blogs');
});
app.get('/about', (req, res)=>{
    //res.send('<p>about</p>');
    res.render('about');
});
app.use('/blogs',blogRoutes);


///redirects
// app.get('/about-us', (req,res)=>{
//     res.redirect('/about');
// })

//404 page
////app.use((req,res)=>{
//    // res.sendFile('./views/404.html', {root: __dirname});
// })

