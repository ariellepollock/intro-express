const express = require('express')
const path = require('path')

const studentDb = require('./data/students-db')

const app = express()

// configure the app (app.set)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// mount middleware (app.use)

// mount routes
app.get('/', function (req, res) {
    res.redirect('/students')
})

app.get('/home', function (req, res) {
    res.render('home')
})

app.get('/students', function(req, res) {
    const students = studentDb.getAll()
    res.render('students/index', { students })
})

app.listen(3000, function () {
    console.log('Listening on port 3000')
})