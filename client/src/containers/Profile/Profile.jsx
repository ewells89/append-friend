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
                            <input id="name" type="text" className="validate"/>
                            <label for="name">Name</label>
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
                            <div class="row">
                                <label>Role</label>
                                    <select className="browser-default" id="appRole">
                                        <option value="" disabled selected>Choose your role</option>
                                        <option value="1">Mentor</option>
                                        <option value="2">Mentee</option>
                                        <option value="3">Collaborator</option>
                                    </select>
                            </div>
                            
                            <div class="row">
                                <p>Languages</p>
                                    <div class="input-field">
                                    <textarea id="languages" class="materialize-textarea"></textarea>
                                    <label for="languages">Enter your regularly used languages here.</label>
                                    </div>
                            </div>

                        </div>

                    </form>
                </div>

                <button
                    className="btn waves-effect waves-dark"
                    type="submit"
                    name="action"
                    >
                    Save Changes
                </button>
                <button
                    className="btn waves-effect waves-dark red"
                    name="action"
                    >
                    Delete
                </button>
            </div>  
        </>
    );
};

export default Profile;