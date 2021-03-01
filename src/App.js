import React, { useState } from 'react';
import { Route, Switch,Link, BrowserRouter as Router  } from 'react-router-dom';
import './App.css';

import Films from "./Films/Films";
import Categories from "./Categorie/Categorie"
import Favoris from "./Favoris/Favoris"
import Auteurs from "./Auteur/Auteur"
import Admin from "./Admin/Admin"

function App() {
  return (
<Router>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav">
            <Link to="/Films" className="nav-item nav-link">Films</Link>
            <Link to="/Auteurs" className="nav-item nav-link">Auteurs</Link>
            <Link to="/Categories" className="nav-item nav-link">Categories</Link>
            <Link to="/Favoris"  className="nav-item nav-link"><i class="fas fa-star"></i>&ensp;Favoris</Link>
            <Link to="/Admin" className="nav-item nav-link"><i class="fas fa-database"></i> &ensp; Admin</Link>
            
        </div>
    </nav>
    <div className="jumbotron">
      <div className="container">
          <div className="row">
              <div className="">
          <Route  path="/Films" component={Films} />
          <Route path="/Auteurs" component={Auteurs} />
          <Route path="/Categories" component={Categories} />
          <Route path="/Favoris" component={Favoris} />
          <Route path="/admin" component={Admin} />
              </div>
          </div>
      </div>
  </div>
    </Router>
  );
}

export default App;
