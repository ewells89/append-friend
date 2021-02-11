import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import './Profile.css';


const Profile = () => {
    const [user, setUser] = useState ([]);

    useEffect(() => {
        // getDevs()
      }, []);
    

    return (
        <>
            <Navbar />
            <div className="container" id="profilePage">

                <div className="row">
                    <form>
                        <div className="col s6" id="profilePageColumn">
                            
                            <div className="input-field">
                            <input id="first_name" type="text" className="validate"/>
                            <label for="first_name">First Name</label>
                            </div>

                            <div className="input-field">
                            <input id="last_name" type="text" className="validate"/>
                            <label for="last_name">Last Name</label>
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
                            <input id="title" type="text" className="validate"/>
                            <label for="title">Job Title</label>
                            </div>
                            
                            <div className="input-field">
                            <input id="experience" type="text" className="validate"/>
                            <label for="experience">Years of Experience</label>
                            </div>

                            <div className="input-field">
                            <input id="gitHub" type="text" className="validate"/>
                            <label for="gitHub">GitHub URL </label>
                            </div>

                        </div>

                        <div className="col s6" id="profilePageColumn">
                            <label>Role</label>
                                <select className="browser-default">
                                    <option value="" disabled selected>Choose your role</option>
                                    <option value="1">Mentor</option>
                                    <option value="2">Mentee</option>
                                    <option value="3">Collaborator</option>
                                </select>

                            <div class="input-field">
                            <label>Languages</label>
                                <select multiple>
                                <option value="" disabled selected>Select languages</option>
                                <option value="1">JavaScript</option>
                                <option value="2">Angular</option>
                                <option value="3">React</option>
                                <option value="4">Vue</option>
                                
                                </select>
                                
                            </div>
                        </div>

                    </form>
                </div>

            
            </div>  
        </>
    );
};

export default Profile;