import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

const DeveloperProfile = () => {
  let {id} = useParams();
  const [searchURL,setSearchURL]=useState(`api/developer/${id}`)
  const [error,setError]= useState(null);
  const [state, setState] = useState({
    _id: "",
    username: "",
    password: "",
    name: "",
    gitHub: "",
    languages: [],
    email: "",
    phone: 0,
    experience: 0,
    location: "",
    occupation: "",
    appRole: "",
    followedUsers: [],
    usersFollowing: [],
    imgURL: "",
  });

  // const getUserInfo = async () => {
  //   console.log(id);
  //   const queryURL = "api/developer/" + id;
  //   console.log(queryURL);
  //   let res = await axios.get(queryURL);
  //   setState( res.data);
  
  // };
  const getUserInfo = () => {
    console.log(id);
    const queryURL = "/api/developer/" + id;
    console.log(queryURL);
    axios
      .get(queryURL)
      .then((res) => {
        console.log(res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserInfo();
    // const queryURL = "api/developer/" + id;
    // console.log(searchURL);
    // console.log({id}.id)
    // fetch(searchURL).then(res => res.json())
    // .then(
    //   (result) => {
    //     setState(result);},(error) => {
    //       setError(error);
    //     })
  }, []);

    return (
        <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col s6">
            <div className="row">
              <div className="col s12">
                <div className="card">
                  <div className="card-image">
                    <img src={state.imgURL} />
                    <span className="card-title" id="name">
                      {state.name}
                    </span>
                  </div>

                  <div className="card-content">
                    <ul className="collection">
                      <li className="collection-item" placeholder="App Role:">
                        Role: {state.appRole}
                      </li>
                      <li className="collection-item">
                        Occupation: {state.occupation}
                      </li>
                      <li className="collection-item">
                        Experience: {state.experience} years
                      </li>
                      <li className="collection-item">
                        Location: {state.location}
                      </li>
                      <li className="collection-item">{state.gitHub}</li>
                      <li className="collection-item">{state.email}</li>
                      <li className="collection-item">{state.phone}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col s6">
            <div className="col s12">
              <h6 className="header">About Me:</h6>
              <div className="card horizontal">
                <div className="card-stacked">
                  <div className="card-content">
                    <p>{state.languages}</p>
                  </div>
                  <div className="card-action">
                    <a href="">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default DeveloperProfile;