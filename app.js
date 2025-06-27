const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.use(express.static('public'));

app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'MMMM', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {title: 'VVVV', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {title: 'CCCC', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    ];

    res.render('index', { title: 'Home', blogs});
});

app.get('/about', (req, res) => {

    res.render('about', { title: 'About'});
});

app.get('/blogs/create', (req, res) => {

    res.render('create', { title: 'Create a new blog'});
});

app.use((req, res) => {

    res.status(404).render('404', { title: '404'});
});