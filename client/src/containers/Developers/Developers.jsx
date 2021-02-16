import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import DevCards from "../../components/DevCards/DevCards";
import axios from "axios";

const Developers = () => {
  const [developers, setDevelopers] = useState([]);
  const [filterDevs, setFilterDevs] = useState([]);

  useEffect(() => {
    getDevs()
  }, []);

  const getDevs = () => {
    axios
    .get("/api/developer")
    .then((response) => {
      console.log(response.data);
      setDevelopers(response.data);
      setFilterDevs(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

 const searchCallback = (searchInput) =>{
   const filterSearch = filterDevs.filter((user) => {
      return user.name.toLowerCase().includes(searchInput);
    });
    setDevelopers(filterSearch);
}

  return (
    <>
      <Navbar searchCallBack={searchCallback}/>
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

export default Developers;
