var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db){
	if(err) throw err;

	console.log('Connected to MongoDB successfully!');

	var query = {'Humidity': 100};

	db.collection('data').findOne(query, function(err, weatherData) {
		if(err) throw err;

		console.dir(weatherData);

		db.close();
	});
});

