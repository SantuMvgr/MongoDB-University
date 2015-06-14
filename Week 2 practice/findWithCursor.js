var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db){
	if(err) throw err;

	console.log('Connected to MongoDB successfully!');

	var query = {'State': 'Vermont', 'Temperature': 45};

	var cursor = db.collection('data').find(query);

	cursor.each(function(err, weatherData) {
		if(err) throw err;

		console.dir(weatherData);

		db.close();
	});
});

