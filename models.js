require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.MONGODB_URI;

mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false,useCreateIndex: true,})
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const UserScheme = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  log: [ExerciseScheme],
});
const ExerciseScheme = new mongoose.SchemaType({
    date: String,
    duration: { type: Number,
    require: true
},
    description: { type: String,
    require:true
},
})


let User = mongoose.model("User", UserScheme);
let Exercise = new mongoose.model("Exercise", ExerciseScheme);

module.exports = { User, Exercise };
