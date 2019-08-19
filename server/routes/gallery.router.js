const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
// const galleryItems = require('../modules/gallery.data');

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
			res.sendStatus(200);
		})
		.catch(err => {
			console.log(`error on PUT route to database: ${err}`);
			res.sendStatus(500);
		});
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
	const sqlQuery = `SELECT * FROM "photos"
        ORDER BY "id" DESC;`;
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

//POST route
router.post('/', (req, res) => {
	const newPicture = req.body;
	console.log(newPicture);
	const values = [newPicture.path, newPicture.description];
	const sqlQuery = `INSERT
			INTO "photos"
				("path", "description")
			VALUES
				($1, $2);`;
	pool
		.query(sqlQuery, values)
		.then(result => {
			console.log(`sucessful POST route to database: ${result}`);
			res.sendStatus(201);
		})
		.catch(error => {
			console.log(`error on POST route to database: ${error}`);
			res.sendStatus(500);
		});
}); //end POST route

//DELETE route
router.delete('/:id', (req, res) => {
	const idToDelete = req.params.id;
	const sqlQuery = `
		DELETE FROM "photos"
			WHERE "id" = $1;`;

	pool
		.query(sqlQuery, [idToDelete])
		.then(result => {
			console.log(`Successful DELETE route to database`);
			res.sendStatus(204);
		})
		.catch(error => {
			console.log(`error on DELETE route to database: ${error}`);
			res.sendStatus(500);
		});
}); // end DELETE route

module.exports = router;
