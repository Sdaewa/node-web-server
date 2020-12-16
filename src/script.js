const express = require('express'); 
const app = express();
const request = require('request');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./util/geocode');
const weather = require('./util/weather');

//path for Express config
const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//handlerbars engine and views setup
app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.static(publicPath));
hbs.registerPartials(partialsPath);

//directories to serve
app.get('', (req, res)=>{
    res.render('index', {
        title: 'Weather Page',
        name: 'Luis'
    });
});


app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About Page',
        name: 'Luis'
    });
});
 

app.get('/help', (req, res)=>{
    res.render('help', {
        message: 'Help not available',
        title: 'Help Page',
        name: 'Luis'
    });
});


app.get('/weather', (req, res)=>{
    if(!req.query.address){
        return res.send({
            error: 'Please enter valid input'
        });
    };
    res.send({
        forecast: 'Sunny',
        location: 'London',
        address: req.query.address
    });
});


app.get('/help/*', (req, res)=>{
    res.render('404', {
        errorMessage: 'Help article not found',
        title:'404',
        name: 'Luis'
    }); 
});


app.get('*', (req, res)=>{
 res.render('404', {
        errorMessage: 'Page not found',
        title:'404',
        name: 'Luis'

    });
});


app.listen(3000, ()=>{
    console.log('Connected to port 3000');
});