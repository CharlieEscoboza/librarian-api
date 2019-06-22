'use strict';

const db = require('../../db/postgres');

/**
 * Gets items from database
 * @param {string} entity - database entity
 * @return {Function} - route handler
 */
function getItems(entity) {
  return function handler(req, resp) {
    return db.getItems(entity).then(data => resp.send(data));
  };
}

/**
 * Gets item based on the id
 * @param {string} entity - database entity
 * @return {Function} - route handler
 */
function getItemById(entity) {
  return function handler(req, resp) {
    const { id } = req.params;

    return db.getItemById(entity, id).then(data => resp.send(data));
  };
}

/**
 * Inserts an item in the database
 * @param {string} entity - database entity
 *  @return {Function} - route handler
 */
function insertItem(entity) {
  return function handler(req, resp) {
    return db.insertItem(entity, req.body).then(data => resp.send(data));
  };
}

/**
 * Updates an item in the database
 * @param {string} entity - database entity
 * @return {Function} - route handler
 */
function updateItemById(entity) {
  return function handler(req, resp) {
    const { id } = req.params;

    return db
      .updateItemById(entity, id, req.body)
      .then(data => resp.send(data));
  };
}

/**
 * Deletes an item from the database
 * @param {string} entity - database entity
 * @return {Function} - route handler
 */
function deleteItem(entity) {
  return function handler(req, resp) {
    const { id } = req.params;

    return db.deleteItem(entity, id).then(data => resp.send(data));
  };
}

module.exports = {
  getItems,
  getItemById,
  insertItem,
  updateItemById,
  deleteItem
};
