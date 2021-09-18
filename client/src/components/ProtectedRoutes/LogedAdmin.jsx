import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthCookieString } from "../../helpers/stringsManage";
import { authControl } from "../../redux/actions/auth/basicAuth";

const AdminProtected = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const [log, setLog] = useState(false);
  const { ath } = useSelector((store) => store.auth);

  useEffect(() => {
    setLog(dispatch(authControl()));
  }, [ath]);

  if (getAuthCookieString("token").token) {
      
    return (
      <Route
        {...rest}
        render={(props) => {
          return <Component />;
        }}
      />
    );
  } else {
    return <Redirect to={`/admin/auth`} />;
  }
};

export default AdminProtected;
