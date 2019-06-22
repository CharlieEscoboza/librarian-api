'use strict';

const { PG_HOST, PG_USR, PG_PWD, DB_NAME } = require('../constants'),
  knex = require('knex')({
    client: 'pg',
    connection: {
      host: PG_HOST,
      user: PG_USR,
      password: PG_PWD,
      database: DB_NAME
    }
  }),
  { ENTITIES } = require('../constants');

/**
 * Validates that the entity passed exists in the database
 * @param {string} entity - database entity
 */
function validateEntity(entity) {
  if (!Object.values(ENTITIES).includes(entity)) {
    throw new Error(`${entity} is not a valid database entity`);
  }
}

/**
 * Gets entity items
 * @param {string} entity - database entity
 * @return {Promise<Array>}
 */
function getItems(entity) {
  validateEntity(entity);

  return knex(entity)
    .select()
    .timeout(1000, 'Connection timeout');
}

/**
 * Gets an item based on the id
 * @param {string} entity - database entity
 * @param {number} id - item id
 * @return {Promise<Object>}
 */
function getItemById(entity, id) {
  return knex(entity)
    .select()
    .where({ id })
    .timeout(1000, 'Connection timeout')
    .then(truncateResponse);
}

/**
 * Inserts an item into the passed entity
 * @param {string} entity - database entity
 * @param {Object} data - item data to be inserted
 * @return {Promise<Object>}
 */
function insertItem(entity, data) {
  return knex(entity)
    .insert(data)
    .returning('*')
    .then(truncateResponse);
}

/**
 * Updates an item in the database based on the passed id
 * @param {string} entity - database entity
 * @param {number} id - item id
 * @param {Object} data - data to be updated
 * @return {Promise<Object>}
 */
function updateItemById(entity, id, data) {
  return knex(entity)
    .where({ id })
    .update(data)
    .returning('*')
    .then(truncateResponse);
}

/**
 * Deletes an item based on the passed id
 * Note: (Updates the active field to false)
 * @param {string} entity - database entity
 * @param {number} id - item id to be desactive
 * @return {Promise<Object>}
 */
function deleteItem(entity, id) {
  return knex(entity)
    .where({ id })
    .update({ active: false })
    .returning('*')
    .then(truncateResponse);
}

/**
 * Truncates array elements to the first one
 * @param {Array<Any>} data - array to be truncated
 * @return {Any} - first element in the array if has length | same data if not
 */
function truncateResponse(data) {
  if (data && data.length) {
    return data[0];
  }

  return data;
}

module.exports = {
  getItems,
  getItemById,
  insertItem,
  updateItemById,
  deleteItem
};
