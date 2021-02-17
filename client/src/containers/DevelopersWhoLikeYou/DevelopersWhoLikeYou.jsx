import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import DevCards from "../../components/DevCards/DevCards";
import axios from "axios";

const DevelopersWhoLikeYou = (authUser) => {
  const [developers, setDevelopers] = useState([]);

  const getDevsWhoLikeYou = () => {
    const queryOne = axios.get("api/developer/" + authUser.authUser);
    const queryTwo = axios.get("api/developer/");
    axios.all([queryOne, queryTwo]).then(
      axios.spread((...responses) => {
        const loggedUser = responses[0].data;
        const allUsers = responses[1].data;
        const likedBy = [];
        for(let i = 0; i < loggedUser.usersFollowing.length; i++) {
          allUsers.forEach((all) => {
            if(all._id === loggedUser.usersFollowing[i]){
              likedBy.push(all);
            }
          });
        }
        setDevelopers(likedBy);
      })
      ).catch((err) => {
        console.log(err);
    });
};

  useEffect(() => {
    getDevsWhoLikeYou()
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          {developers.map((developer) => {
            return <DevCards {...developer} key={developer.username} />;
          })}
        </div>
      </div>
    </>
  );
};

export default DevelopersWhoLikeYou;
