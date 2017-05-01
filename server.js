(function() {
var express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');
var app = express();
mongoose.Promise = global.Promise;
    
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/scores');

var ScoreSchema = mongoose.Schema({
  "name": String,
  "ex1erience": Number,
  "date": String
});

var Score = mongoose.model("Score", ScoreSchema);

app.post("/addScore", function(req, res) {
  var newScore = new Score(req.body);
  newScore.save(function(err,res) {
    if (err) {
      console.log(err);
      res.send("Error");
    } else res.send("Updated");
  });
});

app.get("/getScores", function(req, res) {
  Score.find(req.query, function(err, score) {
    if (err) {
      console.log(err);
    } else {
      res.json(score);
    }
    }).sort({experience: -1})
});

app.listen(3000, function(){
  console.log('Listening on Port 3000');
});

}());
