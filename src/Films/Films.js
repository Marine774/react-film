import React, { Component} from 'react';
import { Route, Switch,Link, BrowserRouter as Router  } from 'react-router-dom';
import detail from '../Detail'
import Auteurs from '../Auteurs/Auteurs'
import Posts from "./Posts"

class Films extends Component{

  render(){
    return (
        <div id="films">
            <h1>Films</h1>
            <Posts/>
           
        </div>
    )
}
}

export default Films;