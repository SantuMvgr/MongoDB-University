var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db){
	if(err) throw err;

	console.log('Connected to MongoDB successfully!');

	var query = {'Humidity': 100};

	var projection = {'State': 1, '_id':0};

	db.collection('data').find(query, projection).toArray(function(err, weatherData) {
		if(err) throw err;

		console.dir(weatherData);

		db.close();
	});
});

