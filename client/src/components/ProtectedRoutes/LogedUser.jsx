import React from "react";
import {Route} from 'react-router-dom'
import { getAuthCookieString } from "../../helpers/stringsManage";

const UserProtected = ({ component: Component, ...rest }) => {

    if (getAuthCookieStringieString("token").token) {
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
  
  export default UserProtected;