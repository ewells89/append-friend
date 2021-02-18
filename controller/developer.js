const User = require("../models/developer");

module.exports = {
  getALL: (req, res) => {
    User.find()
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  },
  create: (req, res) => {
    console.log(req.body);
    User.create(req.body).then((newUser) => {
      console.log(newUser);
      res.json(newUser);
    });
  },
  deleteById: (req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  },
  getById: (req,res) => {
    User.findById({_id: req.params.id}).then((foundUser) =>{
      console.log(foundUser);
      res.json(foundUser);
    });
  },
  // deleteById: (req,res) => {
  //   User.findByIdAndDelete(req.params.id).then((result) => {
  //     res.json(result);
  //   });
  // },
  editById: (req,res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new:true}).then(
      (updatedUser) => {
        res.json(updatedUser);
      }
    );
  },
  // addFollower: (req, res) => {
  //   User.findByIdAndUpdate(req.user._id, {
  //     $push: {
  //       followedUsers: req.params.id,
  //     },
  //   }).then(() => {
  //     User.findByIdAndUpdate(req.params.id, {
  //       $push: {
  //         usersFollowing: req.user._id,
  //       },
  //     }).then(() => {
  //       res.sendStatus(200);
  //     });
  //   });
  // },
  addFollower: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.user._id, {
        $push: {
          followedUsers: req.params.id,
        },
      });

      await User.findByIdAndUpdate(req.params.id, {
        $push: {
          usersFollowing: req.user._id,
        },
      });
      
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  },
};

//get all users

//get user by ID
// router.get('/get-user', (req, res) => {
//   User.findById(id, function (err, result) {
//     if (err) {
//       res.send(err)
//     } else {
//       res.json(result)
//     }
//   })
// })

// //update user by ID
// router.put('/update-user', (req, res) => {
//   User.findOneAndUpdate(
//     { _id: '601c8bc128788e2d19d28463' },
//     { firstname: 'James' },
//     function (err, result) {
//       if (err) {
//         res.send(err)
//       } else {
//         res.json(result)
//       }
//     }
//   )
// })

//create/add user
// router.post("/");

// //delete user
// router.delete('/delete-user', (req, res) => {
//   User.deleteOne({ firstname: 'Steve' }, function (err, result) {
//     if (err) {
//       res.send(err)
//     } else {
//       res.json(result)
//     }
//   })
// })

// module.exports = router;
