import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {
   
  renderContent() {
      switch(this.props.auth){
        case null:
           return 'wait...'

        case false:
           return (
             <li><a href='/auth/google'>Login With Google</a></li>
           );
        default:
          return <li><a href='api/logout'>LogOut</a></li>
      }
  }
    render() { 
      console.log(this.props)
        return ( 
            <nav>
            <div className="nav-wrapper">
              <Link 
              to={this.props.auth ? '/surveys' : '/'} 
              className="left brand-logo">
                Emaily
                </Link>
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