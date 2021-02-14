import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
import Home from "./containers/Home/Home";
import Footer from "./components/Footer/Footer";
import Developers from "./containers/Developers/Developers";
import Profile from "./containers/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectRoute"
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
        <ProtectedRoute exact path="/profile" component={Profile} token={token} authUser={authUser}/>
        {/* <Route exact path="/profile" component={Profile} /> */}
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
