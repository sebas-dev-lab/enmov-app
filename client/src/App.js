import React, { useEffect, useState, Fragment } from "react";
import NavBar from "./components/NavBar/NavBar";
import Write from "./components/Write/Write";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SinglePost from "./pages/Post/SinglePost";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import { Switch, Route, useLocation } from "react-router-dom";
import "./styles/App.css";
import { useSelector } from "react-redux";
import Admin from "./pages/Admin";
import LoginAdminPage from "./pages/Admin/Login";
import { routes } from "./helpers/path";
import NavBarAdmin from "./components/Admin/NavbarAdmin/Index";
import WritePost from "./components/Admin/Dashboard/Post/CreatePosts/WritePost";

function App() {
  let location = useLocation();
  const [path, setPath] = useState("");
  const { ath } = useSelector((store) => store.auth);

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <Fragment>
      {!path.includes(routes.auth.admin) &&
      !path.includes(routes.post.write) ? (
        <NavBar />
      ) : !path.includes(routes.post.write) ? (
        <NavBarAdmin />
      ) : (
        ""
      )}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/signup"
          render={() => (ath ? <Home /> : <Register />)}
        />
        <Route
          exact
          path="/signin"
          render={() => (ath ? <Home /> : <Login />)}
        />
        <Route
          exact
          path="/write"
          render={() => (ath ? <Write /> : <Login />)}
        />
        <Route
          exact
          path="/settings"
          render={() => (ath ? <Settings /> : <Login />)}
        />
        <Route exact path="/post/:postid" component={SinglePost} />
        <Route exact path="/write_post" component={WritePost} />

        <Route exact path="/ad/auth" component={LoginAdminPage} />
        <Route exact path="/ad/:id" component={Admin} />
      </Switch>
    </Fragment>
  );
}

export default App;
