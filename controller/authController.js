const User = require("../models/developer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("express");

module.exports = {
  create: (req, res) => {
    bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
      console.log(hashedPassword);
      const newUser = {
        username: req.body.username,
        password: hashedPassword,
        name: req.body.name,
        email: req.body.email,
        gitHub: req.body.gitHub,
        languages: req.body.languages,
        phone: req.body.phone,
        occupation: req.body.occupation,
        location: req.body.location,
        experience: req.body.experience,
        followedUsers: req.body.followedUsers,
        usersFollowing: req.body.usersFollowing,
        appRole:req.body.appRole,
      };
      User.create(newUser)
        .then((newUser) => {
            const token = jwt.sign({username:newUser.username}, process.env.JWT_SIGNATURE);
            const userID= newUser._id;
            res.json({
                token: token,
                user: userID
            });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).end();
        });
    });
  },
  checkUser: (req,res) => {
        User.findOne({username: req.body.username.toLowerCase()}).then(foundUser => {
            console.log(foundUser);
        bcrypt.compare(req.body.password, foundUser.password).then((result) => {
            console.log(result);
            if(result){
                const token = jwt.sign({username:foundUser.username}, process.env.JWT_SIGNATURE, {expiresIn:60*60});
                const userID= foundUser._id;
                res.json({
                    token: token,
                    user: userID
                });
            }else{
                res.status(401).end();
            }
        });
        });
  }
};
