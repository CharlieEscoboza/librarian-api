'use strict';

module.exports.PG_HOST = process.env.PG_HOST || 'postgres';
module.exports.PG_USR = process.env.PG_USR || 'postgres';
module.exports.PG_PWD = process.env.PG_PWD || 'example';
module.exports.DB_NAME = process.env.DB_NAME || 'librarian_api';
module.exports.ENTITIES = {
  AUTHORS: 'authors',
  EDITORIALS: 'editorials',
  LANGUAGES: 'languages',
  CATEGORIES: 'categories',
  BOOKS: 'books'
};
