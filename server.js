const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://shirameirovitz:"+ process.env.MONGO_ATLAS_PW + "@cluster0.f8w8n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{
 useMongoClient: true
});

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});





const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
