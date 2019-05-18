import React, { Component } from 'react';
import { connect } from 'react-redux'

class Header extends Component {
   
  renderContent() {
      switch(this.props.auth){
        case null:
           return 

        case false:
           return (
             <li><a href='/auth/google'>Login With Google</a></li>
           );
        default:
          return <li><a href='http://localhost:5000/logout'>LogOut</a></li>
      }
  }
    render() { 
      console.log(this.props)
        return ( 
            <nav>
            <div className="nav-wrapper">
              <a href="/" className="left brand-logo">Emaily</a>
              <ul  className="right hide-on-med-and-down">
               {this.renderContent()}
              </ul>
            </div>
          </nav>
         );
    }
}
 const mapStateToProps = ({auth}) => {
    return {
      auth: auth
    }
 }
export default connect(mapStateToProps, null) (Header);