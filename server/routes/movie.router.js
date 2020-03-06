const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

// return all movies
router.get('/', (req, res) => {
  console.log('yes')
  // return all categories
  const queryText = `SELECT * FROM "movies" ORDER BY title ASC`;
  pool.query(queryText)
      .then( (result) => {
          res.send(result.rows);
      })
      .catch( (error) => {
          console.log(`Error on query ${error}`);
          res.sendStatus(500);
      });
});

// add a new movie 
router.post('/', (req, res) => {
  res.sendStatus(200);
});

// delete a movie
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
