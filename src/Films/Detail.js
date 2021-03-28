import React, { Component} from 'react';
import { Route, Switch,Link, BrowserRouter as Router  } from 'react-router-dom';
import { connect } from "react-redux";
import { getData } from "./action";


export class Detail extends Component {
    constructor(props) {
      super(props);
     
    }
  
    componentDidMount() {
      this.props.getData();
    }
  
    render() {
      return (
          <div class="detail">
             <h1>Fiche détail</h1>
              <h2>{this.props.title}</h2>
              <p>{this.props.description}</p>
    
        </div>
      );
    }
  }
  
  function mapStateToProps(state) {
    return {
      articles: state.remoteArticles.slice(0, 10)
    };
  }
  
  export default connect(
    mapStateToProps,
    { getData }
  )(Detail);