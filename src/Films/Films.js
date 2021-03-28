import React, { Component} from 'react';
import { Route, Switch,Link, BrowserRouter as Router  } from 'react-router-dom';

import Posts from "./Posts"
 import Detail from './Detail'

class Films extends Component{

  render(){
    return (
        <div id="films">
            <h1>Films</h1>
            <Link to="/Detail" className="nav-item nav-link"><Posts/></Link>
            <Route  path="/Detail" component={Detail} />
        </div>
    )
}
}

export default Films;