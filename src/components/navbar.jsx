import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
    
    render() { 
        return (  
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed">
            <Link class="navbar-brand" to="/chat">{this.props.user}</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">Home<span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                  {!this.props.user && <Link class="nav-link" to="Register">Register</Link>}
                </li>                           
              </ul>              
            </div>
          </nav>
        );
    }
}
 
export default NavBar;