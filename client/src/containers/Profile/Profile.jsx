import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import axios from "axios";
import './Profile.css';
import { set } from "mongoose";


const Profile = (authUser) => {
    const [state, setState] = useState({
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
        followedUsrs: [],
        usersFollowing: [],
      });

    const getUserInfo = () => {
        const queryURL= "api/developer/" + authUser.authUser;
        console.log(queryURL); 
        axios.get(queryURL).then((res) => {
            console.log(res.data);
            setState(res.data)
        }).catch((err) => {
            console.log(err);
        });

    };
    useEffect(() => {
        // getDevs()
        // setUser({authUser});
        getUserInfo();
        
      }, []);
    
    const handleInputChange = e =>{
        setState({...state,[e.target.id]: e.target.value});
    };
    return (
        <>
            <Navbar />
            <div className="container" id="profilePage">

                <div className="row">
                    <div className="col s6" id="profilePageColumn">
                        <ImageUpload />
                    </div>
                    <div className="col s6" id="profilePageColumn"></div>
                </div>

                <div className="row">
                    <form>
                        <div className="col s6" id="profilePageColumn">
                            
                            <div className="input-field">
                            <input id="name" type="text" className="validate" value={state.name} onChange={handleInputChange}/>
                            {/* <label for="name">Name</label> */}
                            </div>

                            <div className="input-field">
                            <input id="email" type="text" className="validate"/>
                            <label for="email">Email</label>
                            </div>

                            <div className="input-field">
                            <input id="phone" type="text" className="validate"/>
                            <label for="phone">Phone</label>
                            </div>

                            <div className="input-field">
                            <input id="experience" type="text" className="validate"/>
                            <label for="experience">Years of Experience</label>
                            </div>
                            
                            <div className="input-field">
                            <input id="occupation" type="text" className="validate"/>
                            <label for="occupation">Occupation/Job Title</label>
                            </div>

                            <div className="input-field">
                            <input id="gitHub" type="text" className="validate"/>
                            <label for="gitHub">GitHub URL </label>
                            </div>

                        </div>

                        <div className="col s6" id="profilePageColumn">
                            <div className="row">
                                <label>Role</label>
                                    <select className="browser-default" id="appRole">
                                        <option value="" disabled selected>Choose your role</option>
                                        <option value="1">Mentor</option>
                                        <option value="2">Mentee</option>
                                        <option value="3">Collaborator</option>
                                    </select>
                            </div>
                            
                            <div className="row">
                                <p>Languages</p>
                                    <div className="input-field">
                                    <textarea id="languages" className="materialize-textarea"></textarea>
                                    <label for="languages">Enter your regularly used languages here.</label>
                                    </div>
                            </div>

                        </div>

                    </form>
                </div>

            
            </div>  
        </>
    );
};

export default Profile;