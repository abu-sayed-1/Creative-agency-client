import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const userToken = sessionStorage.getItem("token");
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          (loggedInUser || userToken) ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
    </div>
  );
};

export default PrivateRoute;