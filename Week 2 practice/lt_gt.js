var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db){
	if(err) throw err;

	console.log('Connected to MongoDB successfully!');

	var query = {'State': 'California', 'Temperature': {'$gt': 30, '$lt': 45}};

	db.collection('data').find(query).toArray(function(err, weatherData) {
		if(err) throw err;

		console.dir(weatherData);

		db.close();
	});
});

