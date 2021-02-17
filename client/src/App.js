import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
import Home from "./containers/Home/Home";
import Footer from "./components/Footer/Footer";
import Developers from "./containers/Developers/Developers";
import LikedDevelopers from "./containers/LikedDevelopers/LikedDevelopers";
import LinkedDevelopers from "./containers/LinkedDevelopers/LinkedDevelopers";
import DevelopersWhoLikeYou from "./containers/DevelopersWhoLikeYou/DevelopersWhoLikeYou";
import Profile from "./containers/Profile/Profile";
import EditProfile from "./containers/EditProfile/EditProfile";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectRoute"
import ProfilePage from "./containers/ProfilePage/ProfilePage"

function App() {
  const [token, setToken]= useState("");
  const [authUser, setAuthUser] = useState("");
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={(props) => <SignIn {...props} setToken={setToken} setAuthUser= {setAuthUser} />} />
        <Route exact path="/signup" component={(props) => <SignUp {...props} setToken={setToken} setAuthUser= {setAuthUser} />} />
        <ProtectedRoute exact path="/developers" component={Developers} token={token} authUser ={authUser}/>
        <ProtectedRoute exact path="/likeddevelopers" component={LikedDevelopers} token={token} authUser ={authUser}/>
        <ProtectedRoute exact path="/linkeddevelopers" component={LinkedDevelopers} token={token} authUser ={authUser}/>
        <ProtectedRoute exact path="/developerswholikeyou" component={DevelopersWhoLikeYou} token={token} authUser ={authUser}/>
        <ProtectedRoute exact path="/profile" component={Profile} token={token} authUser={authUser}/>
        <ProtectedRoute exact path="/editprofile" component={EditProfile} token={token} authUser={authUser}/>
        <Route exact path="/profilepage" component={ProfilePage} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
