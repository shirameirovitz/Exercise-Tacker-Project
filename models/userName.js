const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

const url = process.env.MONGODB_URI;

mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false,useCreateIndex: true,})
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  count: {
    type: Number,
  },
  log: [
    {
      description: String,
      duration: Number,
      date: Date,
    },
  ],
});

let User = mongoose.model("User", userScheme);


exports.UserMODEL = User;
// userSchema.plugin(uniqueValidator);
// module.exports = mongoose.model("User", userSchema);