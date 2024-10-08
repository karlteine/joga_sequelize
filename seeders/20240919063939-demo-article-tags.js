'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 21,
      tagId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 21,
      tagId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 22,
      tagId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 22,
      tagId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 23,
      tagId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 23,
      tagId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 23,
      tagId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
  ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ArticleTags')
  }
};
