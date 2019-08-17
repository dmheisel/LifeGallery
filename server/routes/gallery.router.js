const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
	console.log(req.params);
	const galleryId = req.params.id;
	const sqlQuery = `UPDATE "photos"
            SET "likes" = ("likes" + 1)
            WHERE "id" = $1;`;

	pool
		.query(sqlQuery, [galleryId])
		.then(result => {
			console.log('successful PUT route to database, updated photo likes');
			res.sendStatus(201);
		})
		.catch(err => {
			console.log(`error on PUT route to database: ${err}`);
			res.sendStatus(500);
		});
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlQuery =
        `SELECT * FROM "photos"
        ORDER BY "id";`;
	pool
		.query(sqlQuery)
		.then(result => {
			console.log('successful GET route to database');
			res.send(result.rows);
		})
		.catch(err => {
			console.log(`error on GET route to database: ${err}`);
			res.sendStatus(500);
		});
}); // END GET Route

module.exports = router;
