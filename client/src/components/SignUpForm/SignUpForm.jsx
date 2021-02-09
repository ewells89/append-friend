import React, {useState} from 'react';

const SignupForm = ({handleFormSubmit}) => {
    const[name,setName]=useState("");
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[github,setGithub]=useState("");
    const[location,setLocation]=useState("");
    const[occupation,setOccupation]=useState("");
    const[experience, setExperience]= useState("");
    const[languages,setLanguages]=useState([]);
    const[followedUsers, setFollowedUsers]=useState([]);
    const[usersFollowing,setUsersFollowing]=useState([]);
    
    return (
        <div>
            <form className="col s12" onSubmit={(e) =>{
                handleFormSubmit(e,{
                    name,username,password,email,phone,github,location,occupation,experience,languages,followedUsers,usersFollowing
                });
            }}>
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Name"
                id="name"
                type="text"
                className="validate"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label for="name">Name</label>
            </div>
            <div className="input-field col s6">
              <input id="username" type="text" className="validate" onChange={(e) => setUsername(e.target.value)} value={username}/>
              <label for="username">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" onChange={(e) => setPassword(e.target.value)} value={password} />
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="email" type="email" className="validate" onChange={(e) => setEmail(e.target.value)} value={email}/>
              <label for="email">Email</label>
            </div>
            <div className="input-field col s6">
              <input id="phone" type="text" className="validate" onChange={(e) => setPhone(e.target.value)} value={phone} />
              <label for="phone">Phone</label>
            </div>
          <div className="input-field col s6">
              <input id="github" type="text" className="validate" onChange={(e) => setGithub(e.target.value)} value={github} />
              <label for="github">Github Profile</label>
            </div>
            <div className="input-field col s6">
              <input id="location" type="text" className="validate" onChange={(e) => setLocation(e.target.value)} value={location} />
              <label for="location">Location</label>
            </div>
            <div className="input-field col s6">
              <input id="occupation" type="text" className="validate" onChange={(e) => setOccupation(e.target.value)} value={occupation} />
              <label for="occupation">Occupation</label>
            </div>
            <div className="input-field col s6">
              <input id="experience" type="text" className="validate" onChange={(e) => setExperience(e.target.value)} value={experience} />
              <label for="experience">Years of Experience</label>
            </div>
        </div>
          <button
            className="btn waves-effect waves-dark"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </form>
        </div>
    );
};

export default SignupForm;