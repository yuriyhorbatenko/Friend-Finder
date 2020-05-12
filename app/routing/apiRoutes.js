
var friendsData = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });


    app.post("/api/friends", function (req, res) {

        var name = req.body.name;
        var photo = req.body.photo;
        var newScores = req.body.scores;
        var newFriend = {
            "name": name,
            "photo": photo,
            "scores": []
        };

        var newScoresArr = newFriend.scores;

        newScores.forEach(function (index) {
            newScoresArr.push(parseInt(newScores[index]));
        });

        console.log(newScoresArr);

        var scoreDiffArr = [];

        for (var i = 0; i < friendData.length; i++) {
            var savedScores = friendData[i].scores;
            var difference = 0;

            for (var j = 0; j < newScoresArr.length; j++) {
                difference += Math.abs(newScoresArr[j] - savedScores[j]);
            }

            scoreDiffArr.push(difference);
        }

        console.log(scoreDiffArr);

        var closest = Math.min.apply(null, scoreDiffArr);
        var match = scoreDiffArr.indexOf(closest);

        console.log(match);

        var matchedFriend = friendData[match];
        res.json(matchedFriend);
        friendData.push(newFriend);

    });

};
