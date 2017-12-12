var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "A$tra!!o9",
  database: "music_listDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  createSong();
  queryAllSongs();
  queryDanceSongs();
  connection.end();
});

// function queryAllSongs() {
//   connection.query("SELECT * FROM songs", function(err, res) {
//     if(err) throw err;
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
//     }
//     console.log("-----------------------------------");
//   });
// }

// function queryDanceSongs() {
//   var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function(err, res) {
//     if(err) throw err;
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
//     }
//   });

//   // logs the actual query being run
//   console.log(query.sql);

function createSong() {
  console.log ("insert a new song....\n");
  var querty = connection.query(
    "INSERT INTO song SET?",
    {
      title: "Barbie Girl",
      artist: "Aqua",
      genre: "pop"
    },
    function(err,res){
      console.lgo(res.affectedRows + "song inserted!\n");
      //Call updateSong AFTER THE INSERT COMPLETES
      updateSong();
    }
  );
}






}


