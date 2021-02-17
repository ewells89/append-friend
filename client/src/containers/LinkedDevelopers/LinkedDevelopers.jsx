import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import DevCards from "../../components/DevCards/DevCards";
import axios from "axios";

const LikedDevelopers = (authUser) => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    const queryOne = axios.get("api/developer/" + authUser.authUser);
    const queryTwo = axios.get("api/developer/");
    axios
      .all([queryOne, queryTwo])
      .then(
        axios.spread((...responses) => {
          const loggedUser = responses[0].data;
          const allUsers = responses[1].data;
          const linkedUsers = [];
          for (let i = 0; i < loggedUser.followedUsers.length; i++) {
            for(let n = 0; n < allUsers.length; n++) {
              for(let x = 0; x < allUsers[n].followedUsers.length; x++) {
                if (allUsers[n].followedUsers[x] === loggedUser._id && loggedUser.followedUsers[i] === allUsers[n]._id) {
                  linkedUsers.push(allUsers[n]);
                }
              }
            };
          }
          setDevelopers(linkedUsers);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          {developers.map((developer) => {
            return <DevCards {...developer} key={developer._id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default LikedDevelopers;
