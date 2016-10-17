var express = require('express'),
mongodbClient = require("mongodb").MongoClient,
assert = require("assert");
var app = express();


console.log("Starting app");
mongodbClient.connect("mongodb://localhost:27017/video", function(err, db){
  assert.equal(null,err);
console.log("Connection Established Successfully!");

db.collection("movies").find({"Year":1990}, function(err,docs){

  docs.forEach(function(doc){
      console.log(doc.title);
  });
  db.close();

});
  console.log("Called Find Successfully");
});
