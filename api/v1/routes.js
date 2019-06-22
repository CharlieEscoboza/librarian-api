'use strict';

const router = require('express').Router(),
  handlers = require('./handlers'),
  { ENTITIES } = require('../../constants');

router.get('/authors/', handlers.getItems(ENTITIES.AUTHORS));
router.get('/editorials/', handlers.getItems(ENTITIES.EDITORIALS));
router.get('/languages/', handlers.getItems(ENTITIES.LANGUAGES));
router.get('/categories/', handlers.getItems(ENTITIES.CATEGORIES));
router.get('/books/', handlers.getItems(ENTITIES.BOOKS));

router.get('/authors/:id', handlers.getItemById(ENTITIES.AUTHORS));
router.get('/editorials/:id', handlers.getItemById(ENTITIES.EDITORIALS));
router.get('/languages/:id', handlers.getItemById(ENTITIES.LANGUAGES));
router.get('/categories/:id', handlers.getItemById(ENTITIES.CATEGORIES));
router.get('/books/:id', handlers.getItemById(ENTITIES.BOOKS));

router.post('/authors', handlers.insertItem(ENTITIES.AUTHORS));
router.post('/editorials', handlers.insertItem(ENTITIES.EDITORIALS));
router.post('/languages', handlers.insertItem(ENTITIES.LANGUAGES));
router.post('/categories', handlers.insertItem(ENTITIES.CATEGORIES));
router.post('/books', handlers.insertItem(ENTITIES.BOOKS));

router.put('/authors/:id', handlers.updateItemById(ENTITIES.AUTHORS));
router.put('/editorials/:id', handlers.updateItemById(ENTITIES.EDITORIALS));
router.put('/languages/:id', handlers.updateItemById(ENTITIES.LANGUAGES));
router.put('/categories/:id', handlers.updateItemById(ENTITIES.CATEGORIES));
router.put('/books/:id', handlers.updateItemById(ENTITIES.BOOKS));

router.patch('/authors/:id', handlers.updateItemById(ENTITIES.AUTHORS));
router.patch('/editorials/:id', handlers.updateItemById(ENTITIES.EDITORIALS));
router.patch('/languages/:id', handlers.updateItemById(ENTITIES.LANGUAGES));
router.patch('/categories/:id', handlers.updateItemById(ENTITIES.CATEGORIES));
router.patch('/books/:id', handlers.updateItemById(ENTITIES.BOOKS));

router.delete('/authors/:id', handlers.deleteItem(ENTITIES.AUTHORS));
router.delete('/editorials/:id', handlers.deleteItem(ENTITIES.EDITORIALS));
router.delete('/languages/:id', handlers.deleteItem(ENTITIES.LANGUAGES));
router.delete('/categories/:id', handlers.deleteItem(ENTITIES.CATEGORIES));
router.delete('/books/:id', handlers.deleteItem(ENTITIES.BOOKS));

module.exports = router;
