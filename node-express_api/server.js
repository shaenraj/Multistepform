var express = require("express")
var cors = require("cors");
var app = express()
var db = require("./database.js")
var md5 = require("md5")

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var HTTP_PORT = 8000
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});


app.post("/api/adduserdetails", (req, res, next) => {
    console.log("test");
    var data =req.body;

    var sql ='INSERT INTO userdata (data) VALUES (?)'
    var params =[data]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data
        })
    });
})


// Root path
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

