const express = require("express");
const app = express();
const cors = require("cors");
const { User, Exercise } = require("./model");
const { request } = require("express");
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// test 2
app.post("/api/exercise/new-user", async (req, res) => {
  const userName = req.body.username;
  const newUser = new User({
    username: userName,
  });
  newUser.save((err, user) => {
    if (!err) {
      let responseObj = {};
      responseObj.username = userName;
      responseObj._id = user._id;
      res.json(responseObj);
    }
  });
});





const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
