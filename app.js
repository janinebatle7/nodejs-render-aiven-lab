const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "mysql-38880adb-janine-batle10.e.aivencloud.com",
  user: "avnadmin",
  password: "AVNS_G2z57INXzp0GM7bXKVK",
  database: "defaultdb",
  port: "12590"
});

app.get("/", (req, res) => {
  db.query("SELECT NOW()", (err, result) => {
    if(err) throw err;
    res.send("Database Connected Successfully: " + result[0]["NOW()"]);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
