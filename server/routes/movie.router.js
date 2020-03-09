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

router.get('/package/:id', (req, res) => {
  console.log('IN PACAKGE')
  console.log('req',req.params.id);
  // const queryText = 'SELECT "movies".*, "genres".name FROM "movies" JOIN "movie_genres" ON "movies".id = "movie_genres".movie_id JOIN "genres" ON "genres".id = "movie_genres".genres_id WHERE "movies".id = $1;';
  const queryText = 'SELECT * FROM "movies" WHERE "movies".id = $1'
  pool.query(queryText, [req.params.id])
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
      console.log('ERROR', err);
      res.sendStatus(500);
      });
});

//edit movie 
router.put('/', (req, res) => {
  const newMovie = req.body;

  const queryText = `UPDATE movies
  SET "title" = $1,
  "description" = $2
  WHERE id=$3;`;

  const queryValues = [
    newMovie.title,
    newMovie.description,
    newMovie.id,
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(200);})
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });
});

router.get('/genre/:id', (req, res) => {
  // const queryText = `SELECT "movies".* FROM "movies" 
  // JOIN "movie_genres" ON "movies".id = "movie_genres".movie_id JOIN "genres" 
  // ON "genres".id = "movie_genres".genres_id WHERE "genres".name = $1;`;
  const queryText = `SELECT "name" FROM "genres" JOIN "movie_genres" ON "genres"."id" ="movie_genres"."genres_id"
  JOIN "movies" ON "movies"."id" = "movie_genres"."movie_id" WHERE "movies"."id" = $1`;

  pool.query(queryText, [req.params.id])
      .then((result) => { 
        console.log('THIS IS RESULT', result.rows)
        res.send(result.rows); })
      .catch((err) => {
      console.log('Error completing SELECT query', err);
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
