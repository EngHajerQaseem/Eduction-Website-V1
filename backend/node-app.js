const express = require("express");
const app = express();
var cors = require("cors");
var mysql = require('mysql');


app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "school_db"
});

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM school_tb", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

app.get("/schools", (req, res) => {
    con.query("SELECT * FROM school_tb", (err, result) => {
      res.send(result);
    });
  });

  app.get("/trueArraival",(req,res)=>
  {
    con.query("SELECT * FROM school_tb WHERE arrival = 'true'" , (err, result) => {
      res.send(result); 
    });
  })

  app.get("/falseArraival",(req,res)=>
  {
    con.query("SELECT * FROM school_tb WHERE arrival = 'false'" , (err, result) => {
      res.send(result); 
    });
  })

  const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));