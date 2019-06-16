const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers')
app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs')
app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) => {

    res.render('home', {
        name: "Carlitos",
        year: new Date().getFullYear()
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(app.get('port'))