const Sequelize = require("sequelize")
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

const models = require('../models')
const { Author, Article } = require('../models')

const getAllArticles = (req, res) => {
  models.Article.findAll()
  .then(articles => {
    console.log(articles)
    return res.status(200).json({ articles })
  })
  .catch (error => {
    return res.status(500).send(error.message)
  })
}

const getArticleBySlug = (req, res) => {
    models.Article.findOne({
        where: {
            slug : req.params.slug
        },
        include: [{
            model: models.Author
        }],
    })
    .then(article => {
        console.log(article)
        return res.status(200).json({ article })
    })
    .catch (error => {
        return res.status(500).send(error.message)
    })
}

const getArticlesByAuthor = async (req, res) => {
    try {
        const authorId = req.params.id;

        const author = await Author.findByPk(authorId, {
            include: {
                model: Article,
                as: 'articles'
            }
        });

        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }

        res.json(author);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getAllArticles,
    getArticleBySlug,
    getArticlesByAuthor
} 