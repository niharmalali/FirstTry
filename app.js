var express = require('express'),
mongodbClient = require("mongodb").MongoClient,
http = require('http'),
assert = require("assert");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/year/:year', function(req, res){
  //var documents={};
   console.log("Starting app");
  mongodbClient.connect("mongodb://localhost:27017/video", function(err, db){
    assert.equal(null,err);
    // console.log("Connection Established Successfully!");
var year = Number(req.params.year);
console.log(year);
    db.collection("movies").find({"Year":year}).toArray(function(err,docs){
      // res.render('data',{objects: docs});
      // docs.forEach(function(doc){
      //     console.log(doc.title);
      // });
      //res.set('Content-Type','application/json'); //G
       res.send(docs); //H
      //res.send("response");
      // db.close();

    });
    //resp.send(documents);

  });
  // console.log("Called Find");
});

http.createServer(app).listen(5000, function() {
  console.log('Listening on port 5000');
});
