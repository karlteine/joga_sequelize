const Sequelize = require("sequelize")
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

const models = require('../../models')
const article = require("../../models/article")

const createArticle = (req, res) => {
    let name =  req.body.name
    let slug = req.body.slug
    let image = req.body.image
    let body = req.body.body
    let authorId = req.body.author_id

    const newArticle = models.Article.create({
        name: name,
        slug: slug,
        image: image,
        body: body,
        published: new Date().toISOString().slice(0, 19).replace('T', ' '),
        author_id: authorId
    })
    .then(article => {
        console.log(article)
        return res.status(200).json({ message: 'New article is added' })
    })
    .catch (error => {
        return res.status(500).send(error.message)
    })
}
const updateArticle = async (req, res) => {
    const articleId = req.params.id;

    if (req.method === 'GET') {
        try {
            // Fetch the article details by ID
            const article = await models.Article.findByPk(articleId, {
                include: [models.Author] // Include author details
            });
            if (!article) {
                return res.status(404).json({ message: 'Article not found' });
            }

            // Render the edit form with article
            res.render('editArticle', {
                article: article.toJSON(),
                authorName: article.Author.name // Assuming 'Author' is the association alias
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    } else if (req.method === 'POST') {
        try {
            const { name, slug, image, body, author_id } = req.body;

            // Update the article in the database
            const [updated] = await models.Article.update(
                { name, slug, image, body, author_id },
                { where: { id: articleId } }
            );

            if (updated) {
                return res.status(200).json({ message: 'Article updated successfully' });
            }

            res.status(404).json({ message: 'Article not found' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
};

module.exports = {
    createArticle,
    updateArticle
} 