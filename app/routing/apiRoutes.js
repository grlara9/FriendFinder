var friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", (req, res)=>{
        res.json(friends)
    })

    app.post("/api/friends", (req, res)=> {
        var bestMatch ={
            name: "",
            photo:"",
            friendDifference: Infinity
        };
    // Here we take the result of the user"s survey POST and parse it.
        var userData = req.body;
        var userScores = userData.scores;
        var totalDifference;
    // Here we loop through  all the friend possibilities in the database.
        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDifference = 0;
    // We then loop through all the scores of each friend
            for(var j = 0; j < currentFriend.scores.length; j++){
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];
                totalDifference += Math.abs(parseInt(currentUserScore)- parseInt(currentFriendScore))
            }
            if(totalDifference <= bestMatch.friendDifference){
            // Reset the bestMatch to be the new friend.
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
            friends.push(userData);
            res.json(bestMatch);
        })
    };