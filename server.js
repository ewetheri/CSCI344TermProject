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
    "score": Number,
    "floor": Number,
    "level": Number,
    "date": String
});

var Score = mongoose.model("Score", ScoreSchema);

app.post("/addScore", function(req, res) {
    var str = JSON.stringify(req.body).slice(2,-5).replace(/\\/g, '');
    console.log(str);

    var newScore = new Score(JSON.parse(str));
    newScore.save(function(err,result) {

    if (err) {
      console.log(err);
      //result.send("Error");
    } //else result.send("Updated");
  });
});

app.get("/getScores", function(req, res) {
  Score.find(req.query, function(err, score) {
    if (err) {
      console.log(err);
    } else {
      res.json(score);
    }
    }).sort({score: -1}).limit(10);
});

app.get("/getAll", function(req, res) {
    Score.find(req.query, function(err, score) {
        if (err) {
            console.log(err);
        } else {
            res.json(score);
        }
        }).sort({score: -1});
    });


app.listen(3000, function(){
  console.log('Listening on Port 3000');
});

}());
