const express = require("express");
const exphbs  = require('express-handlebars');
const path = require('path');
const helpers  = require('./helpers/helpers')
const app = express()

app.use(express.json())

const hbs = exphbs.create({
    helpers: helpers,
    defaultLayout: null,
    extname: '.hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }))

const Sequelize = require("sequelize")
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

const articleRouter = require('./routes/article')
app.use('/', articleRouter)
app.use('/article', articleRouter)
app.use('admin/article', articleRouter)

app.get("/", (req, res) => {
    res.json({ message: "Welcome to sequelize application." })
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})