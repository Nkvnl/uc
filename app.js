var express = require("express"); // call express
var app = express();



app.set('port', (process.env.PORT || 3020))
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res) {
    res.render("index");
});


app.listen(app.get('port'), function() {
    console.log('starting');
});
