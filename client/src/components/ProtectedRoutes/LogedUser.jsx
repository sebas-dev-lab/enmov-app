import React from "react";
import {Route} from 'react-router-dom'

const UserDashBoardProtected = ({ component: Component, ...rest }) => {

    if (getCookie("token")) {
      return (
        <Route
          {...rest}
          render={(props) => {
            return <Component  />;
          }}
        />
      );
    } else {
      return <Redirect to={`/`} />;
    }
  };
  
  export default UserDashBoardProtected;