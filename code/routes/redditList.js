var request = require('request');
exports.redditList = function(req, res) {
	console.log(req.params);
	var searchParam = req.query["term"];
	request.get("http://www.reddit.com/r/pics/search.json?q=Colonoscopy", function (err, resp, body) {
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
      res.send(obj);
    }
  });
};


	