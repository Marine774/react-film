import React from "react";
import { Button } from "./AuthForms";
import { useAuth } from "./Auth";
import { Route, Switch,Link, BrowserRouter as Router  } from 'react-router-dom';


function Admin(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <div class="admin">
      <h1>Page administrateur</h1>

      

    </div>
  );
}

export default Admin;