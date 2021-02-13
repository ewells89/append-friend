require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const path =require("path");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/append-friend",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) console.log("Mongoose connection error: ", err);
    else console.log("Mongoose successfully connected!");
  }
);



// app.use("api/auth", AuthController)
app.use(require("./routes"))

// Fix This Later
app.post("/api/login", (req,res) => {
  res.json({
    message: "Successfully Signed In.",
    token: "banana"
  })
})

app.get("*", (req,res) => {
  res.sendFile(path.join(__dirname,"client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
