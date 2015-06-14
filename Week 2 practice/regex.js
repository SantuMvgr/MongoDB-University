var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test', function(err, db){
	if(err) throw err;

	console.log('Connected to MongoDB successfully!');

	var query = {'city':{'$regex':'JERSEY'}};

	db.collection('zipcodes').find(query).toArray(function(err, cities) {
		if(err) throw err;

		console.dir(cities);

		db.close();
	});
});

