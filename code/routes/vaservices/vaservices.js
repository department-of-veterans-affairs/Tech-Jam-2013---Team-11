var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    db;

var mongoClient = new MongoClient(new Server('localhost', 27017));
mongoClient.open(function(err, mongoClient) {
    db = mongoClient.db("va");
});

exports.myHealthPersonalInformationReport = function(req,res) {
	res.header("Access-Control-Allow-Origin", "*");
	console.log("hello");
	var userKey = parseInt(req.query["userKey"]);
	if (userKey != null){
	db.collection('MHPIR', function(err, collection){
		collection.find({'userKey': userKey}
		).limit(1).toArray(function (err, items){
			//console.log(items);
			res.jsonp(items);
		});
	});
	}
	else {
		res.send(400);
	}
	
};

exports.demographics = function(req,res) {
	 res.header("Access-Control-Allow-Origin", "*");
	console.log("hello");
	var userKey = parseInt(req.query["userKey"]);
	if (userKey != null){
	db.collection('DEMO', function(err, collection){
		collection.find({'userKey': userKey}
		).limit(1).toArray(function (err, items){
			//console.log(items);
			res.jsonp(items);
		});
	});
	}
	else {
		res.send(400);
	}
	
};

exports.downloadRequestSummary = function(req,res) {
 res.header("Access-Control-Allow-Origin", "*");	
console.log("hello");
	var userKey = parseInt(req.query["userKey"]);
	if (userKey != null){
	db.collection('DRS', function(err, collection){
		collection.find({'userKey': userKey}
		).limit(1).toArray(function (err, items){
			//console.log(items);
			res.jsonp(items);
		});
	});
	}
	else {
		res.send(400);
	}
	
};

exports.myHealthAccountSummary = function(req,res) {
 res.header("Access-Control-Allow-Origin", "*");
	console.log("hello");
	var userKey = parseInt(req.query["userKey"]);
	if (userKey != null){
	db.collection('MHAS', function(err, collection){
		collection.find({'userKey': userKey}
		).limit(1).toArray(function (err, items){
			//console.log(items);
			res.jsonp(items);
		});
	});
	}
	else {
		res.send(400);
	}
	
};

exports.healthCareProviders = function(req,res) {
	console.log("hello");
 res.header("Access-Control-Allow-Origin", "*");
 	res.header("Access-Control-Allow-Origin", "*");
	var userKey = parseInt(req.query["userKey"]);
	if (userKey != null){
	db.collection('HCP', function(err, collection){
		collection.find({'userKey': userKey}
		).limit(1).toArray(function (err, items){
			//console.log(items);
			res.jsonp(items);
		});
	});
	}
	else {
		res.send(400);
	}
	
};

exports.treatmentFacilities = function(req,res) {
 res.header("Access-Control-Allow-Origin", "*");	
console.log("hello");
	var userKey = parseInt(req.query["userKey"]);
	if (userKey != null){
	db.collection('TF', function(err, collection){
		collection.find({'userKey': userKey}
		).limit(1).toArray(function (err, items){
			//console.log(items);
			res.jsonp(items);
		});
	});
	}
	else {
		res.send(400);
	}
	
};

exports.healthInsurance = function(req,res) {
 res.header("Access-Control-Allow-Origin", "*");
	console.log("hello");
	var userKey = parseInt(req.query["userKey"]);
	if (userKey != null){
	db.collection('HI', function(err, collection){
		collection.find({'userKey': userKey}
		).limit(1).toArray(function (err, items){
			//console.log(items);
			res.jsonp(items);
		});
	});
	}
	else {
		res.send(400);
	}
	
};

exports.vaWellnessReminders = function(req,res) {
 res.header("Access-Control-Allow-Origin", "*");	
console.log("hello");
	var userKey = parseInt(req.query["userKey"]);
	if (userKey != null){
	db.collection('VWR', function(err, collection){
		collection.find({'userKey': userKey}
		).limit(1).toArray(function (err, items){
			//console.log(items);
			res.jsonp(items);
		});
	});
	}
	else {
		res.send(400);
	}
	
};

exports.vaAppointments = function(req,res) {
 res.header("Access-Control-Allow-Origin", "*");
	console.log("hello");
	var userKey = parseInt(req.query["userKey"]);
	if (userKey != null){
	db.collection('VA', function(err, collection){
		collection.find({'userKey': userKey}
		).limit(1).toArray(function (err, items){
			//console.log(items);
			res.jsonp(items);
		});
	});
	}
	else {
		res.send(400);
	}
	
};

exports.vaMedicationHistory = function(req,res) {
	console.log("hello");
 res.header("Access-Control-Allow-Origin", "*");
	var userKey = parseInt(req.query["userKey"]);
	if (userKey != null){
	db.collection('VMH', function(err, collection){
		collection.find({'userKey': userKey}
		).limit(1).toArray(function (err, items){
			//console.log(items);
			res.jsonp(items);
		});
	});
	}
	else {
		res.send(400);
	}
	
};

exports.medicationsAndSupplements = function(req,res) {
	console.log("hello");
 res.header("Access-Control-Allow-Origin", "*");
	var userKey = parseInt(req.query["userKey"]);
	if (userKey != null){
	db.collection('MAS', function(err, collection){
		collection.find({'userKey': userKey}
		).limit(1).toArray(function (err, items){
			//console.log(items);
			res.jsonp(items);
		});
	});
	}
	else {
		res.send(400);
	}
	
};

exports.vaAllergies = function(req,res) {
	console.log("hello");
 res.header("Access-Control-Allow-Origin", "*");
	var userKey = parseInt(req.query["userKey"]);
	if (userKey != null){
	db.collection('VALL', function(err, collection){
		collection.find({'userKey': userKey}
		).limit(1).toArray(function (err, items){
			//console.log(items);
			res.jsonp(items);
		});
	});
	}
	else {
		res.send(400);
	}
	
};

exports.allergiesAdverseReactions = function(req,res) {
	console.log("hello");
 res.header("Access-Control-Allow-Origin", "*");
	var userKey = parseInt(req.query["userKey"]);
	if (userKey != null){
	db.collection('AAR', function(err, collection){
		collection.find({'userKey': userKey}
		).limit(1).toArray(function (err, items){
			//console.log(items);
			res.jsonp(items);
		});
	});
	}
	else {
		res.send(400);
	}
	
};

exports.medicalEvents = function(req,res) {
	console.log("hello");
 res.header("Access-Control-Allow-Origin", "*");
	var userKey = parseInt(req.query["userKey"]);
	if (userKey != null){
	db.collection('MEV', function(err, collection){
		collection.find({'userKey': userKey}
		).limit(1).toArray(function (err, items){
			//console.log(items);
			res.jsonp(items);
		});
	});
	}
	else {
		res.send(400);
	}
	
};

exports.immunizations = function(req,res) {
	console.log("hello");
 res.header("Access-Control-Allow-Origin", "*");
	var userKey = parseInt(req.query["userKey"]);
	if (userKey != null){
	db.collection('IMMU', function(err, collection){
		collection.find({'userKey': userKey}
		).limit(1).toArray(function (err, items){
			//console.log(items);
			res.jsonp(items);
		});
	});
	}
	else {
		res.send(400);
	}
	
};

exports.vaLaboratoryResults = function(req,res) {
	console.log("hello");
 res.header("Access-Control-Allow-Origin", "*");
	var userKey = parseInt(req.query["userKey"]);
	if (userKey != null){
	db.collection('VLR', function(err, collection){
		collection.find({'userKey': userKey}
		).limit(1).toArray(function (err, items){
			//console.log(items);
			res.jsonp(items);
		});
	});
	}
	else {
		res.send(400);
	}
	
};

exports.labsAndTests = function(req,res) {
	console.log("hello");
 res.header("Access-Control-Allow-Origin", "*");
	var userKey = parseInt(req.query["userKey"]);
	if (userKey != null){
	db.collection('LABAT', function(err, collection){
		collection.find({'userKey': userKey}
		).limit(1).toArray(function (err, items){
			//console.log(items);
			res.jsonp(items);
		});
	});
	}
	else {
		res.send(400);
	}
	
};

exports.vitalsAndReadings = function(req,res) {
	console.log("hello");
 res.header("Access-Control-Allow-Origin", "*");
	var userKey = parseInt(req.query["userKey"]);
	if (userKey != null){
	db.collection('VAR', function(err, collection){
		collection.find({'userKey': userKey}
		).limit(1).toArray(function (err, items){
			//console.log(items);
			res.jsonp(items);
		});
	});
	}
	else {
		res.send(400);
	}
	
};

exports.familyHealthHistory = function(req,res) {
	console.log("hello");
 res.header("Access-Control-Allow-Origin", "*");
	var userKey = parseInt(req.query["userKey"]);
	if (userKey != null){
	db.collection('FHH', function(err, collection){
		collection.find({'userKey': userKey}
		).limit(1).toArray(function (err, items){
			//console.log(items);
			res.jsonp(items);
		});
	});
	}
	else {
		res.send(400);
	}
	
};

exports.militaryHealthHistory = function(req,res) {
	console.log("hello");
 res.header("Access-Control-Allow-Origin", "*");
	var userKey = parseInt(req.query["userKey"]);
	if (userKey != null){
	db.collection('MHH', function(err, collection){
		collection.find({'userKey': userKey}
		).limit(1).toArray(function (err, items){
			//console.log(items);
			res.jsonp(items);
		});
	});
	}
	else {
		res.send(400);
	}
	
};

exports.registration = function(req,res){
	console.log('registration');
 res.header("Access-Control-Allow-Origin", "*");
	var loginname = req.body.login.name;
	var loginpassword = req.body.login.pass;
	console.log(loginname);
	console.log(loginpassword);
	db.collection('registration',function(err,collection){
		collection.find({'email':loginname,'password':loginpassword},{"userKey":1,"_id":0}).limit(1).toArray(function (err,items){
			console.log(JSON.stringify(items));
			var JSONObject = JSON.parse(JSON.stringify(items));
			console.log(JSONObject);
			console.log(items.length);
                        console.log(JSONObject[0]);
			if (items.length > 0 ) {
			res.redirect("/?userKey="+JSONObject[0].userKey);
			}
			else {
			console.log("not in DB need to reg");
			
			var randomnumber = Math.floor(Math.random()*2000);
			console.log(randomnumber);
			collection.insert({'email':loginname,'password':loginpassword,"userKey":randomnumber},function (err,results){
				console.log(results[0]._id);
			});


			res.redirect("/?userKey="+randomnumber);
			}
		});
	});
};

var request = require('request');
exports.redditList = function(req, res) {
	console.log(req.params);
 res.header("Access-Control-Allow-Origin", "*");	
var searchParam = req.query["term"];
	request.get("http://www.reddit.com/r/pics/search.json?q=" + searchParam, function (err, resp, body) {
    if (!err) {
	
      var JSONObject= JSON.parse(body);

	var obj = [];
	for (var i = 0; i<5; i++)
	{
		if(JSONObject.data.children[i])
		{
			var tempobj = {};
			tempobj.text = JSONObject.data.children[i].data.selftext;
			tempobj.url = "http://www.reddit.com" + JSONObject.data.children[i].data.permalink;
			tempobj.thumbnail = JSONObject.data.children[i].data.thumbnail;
			tempobj.title = JSONObject.data.children[i].data.title;
			//console.log("doing push");
			obj.push(tempobj);
		}
		
	}

	console.log(obj[0].text);
        var newObj = JSON.parse(JSON.stringify(obj));
        console.log(newObj);
      res.jsonp(newObj);
    }
  });
};

exports.pills = function(req, res) {
	console.log(req.params);
	var searchParam = req.query["term"];
	request.get("http://www.drugs.com/imprints.php?drugname=" + searchParam, function (err, resp, body) {
    if (!err) {
	res.send(body);
    }
	});
};

exports.loadFile = function(req, res) {
	var userKey = req.body.userKey;
       console.log(userKey);
	console.log(req.files);
  	var path = req.files.filename.path;
	var file = "/opt/va/" + path;
	console.log(file);
	var exec = require("child_process").exec;
exec('ruby /var/lib/gems/1.8/gems/blue_button_parser-0.1.0/test/parseVA.rb' + ' ' +file+ ' ' + userKey, function (err, stdout, stderr) {
console.log(stdout);
	console.log(userKey);
	res.redirect('/');
  });
};

