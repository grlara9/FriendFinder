//Dependencies
const express = require("express");
const path = require("path")

//tell node we are creating an express server
var app = express();
//sets an initial port
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("Listening on port" + PORT);
})