var MongoClient = require('mongodb').MongoClient;
var request = require('request');

MongoClient.connect('mongodb://localhost:27017/test', function(err, db){
	if(err) throw err;

	console.log('Connected to MongoDB successfully!');

	request('http://www.reddit.com/.json', function(error, response, body) {
		if(!error && response.statusCode == 200) {
			var obj = JSON.parse(body);

			var stories = obj.data.children.map(function(story) { return story.data});

			db.collection('reddit').insert(stories, function(err, data) {
				if(err) throw err;

				console.dir(data);

				db.close();
			});
		}
	});

	
});

