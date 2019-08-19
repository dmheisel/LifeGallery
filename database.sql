CREATE TABLE "photos"(
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(800) NOT NULL,
	"description" VARCHAR(800),
	"likes" INT DEFAULT 0);

INSERT
	INTO "photos"
		("path", "description")
	VALUES
		('images/Anniversary_skiing.jpg', 'Jess and I went to Lutsen ski-resort over Christmas for our tenth wedding anniversary'),
		('images/Capri.jpg', 'The Isle of Capri, off the Amalfi coast in Italy.  Visited during 2016 vacation with my folks'),
		('images/Catacombs.jpg', 'The first stop in Paris on our 2018 vacation to France.  Jess loved it!'),
		('images/Chateau_Beynac.jpg', 'Chateau de Beynac, above the charming town of Beynac et Cazenac where we stayed for 5 nights during our 2018 vacation to France.'),
		('images/Gordes.jpg','Picturesque town of Gordes, in the Luberon valley in Provence.  Had to stop on the highway to take a pic!'),
		('images/Grand_Marais.jpg', 'Summer trip to Grand Marais with PR and Bri.  The North Shore of Lake Superior is gorgeous.'),
		('images/Jess_Duluth.jpg', 'Day trip in Duluth, Jess stopped to look out at the ships while combing the beach for agates.'),
		('images/Jessica_in_France.jpg', 'One of my favorite pics, taken shortly after we finally arrived at our rented apartment in the Dordogne Valley, where we stayed for 5 nights.'),
		('images/Maison_du_Bonnieux.jpg','The balcony window view from our rented apartment in Bonnieux, during the 2018 France vacation.'),
		('images/Parents_At_Capri.jpg', 'Taken during our 2016 vacation to Italy, stopped in a garden on the Isle of Capri.'),
		('images/Pont_du_Gard.jpg', 'The scale is breathtaking, we could not believe what we were seeing standng beneath this massive, ancient construction'),
		('images/Quorra.jpg', 'Everyones favorite Corgi!'),
		('images/San_Gimignano.jpg', 'The view from Torre Grossa in San Gimignano - the city of Towers.  Breathtakingly beautiful, and incredibly surreal.'),
		('images/Sant_Antimo.jpg', 'A small church where we stopped one afternoon to listen to the monks recite their chanted prayers.'),
		('images/Tessa_fishing.jpg', 'A calm morning fishing, Tessa helped watch the lines.');
		