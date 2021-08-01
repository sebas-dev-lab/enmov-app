import NavBar from "./components/NavBar/NavBar";
import Write from "./components/Write/Write";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SinglePost from "./pages/Post/SinglePost";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/signup"
          render={() => (user ? <Home /> : <Register />)}
        />
        <Route
          exact
          path="/signin"
          render={() => (user ? <Home /> : <Login />)}
        />
        <Route
          exact
          path="/write"
          render={() => (user ? <Write /> : <Login />)}
        />
        <Route
          exact
          path="/settings"
          render={() => (user ? <Settings /> : <Login />)}
        />
        <Route exact path="/post/:postid" component={SinglePost} />
      </Switch>
    </Router>
  );
}

export default App;
