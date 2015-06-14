var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test', function(err, db){
	if(err) throw err;

	console.log('Connected to MongoDB successfully!');

	var cursor = db.collection('reddit').find({}, {"title":1, "score":1, "_id":0}).limit(5).sort({'score': -1});
	
	cursor.toArray(function(err, story) {
		if(err) throw err;

		console.dir(story);

		db.close();
	});
});

