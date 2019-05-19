import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions' //taking all actions and assign to actions
//ROUTES
import Header from './Header'
import Landing from './Landing'
import SurveyNew from './Surveys/SurveyNew'


const Dashboard = () => <h2>Dashboard</h2>




class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser()
   
  }

  render() { 
   
    return ( 
      
      <div className='container'>
      <BrowserRouter>
        <div>
          {/* //always visible */}
             <Header/>
             <Route exact path='/' component={Landing} />
             <Route exact path='/surveys' component={Dashboard} />
             <Route exact path='/surveys/new' component={SurveyNew} />
        </div>
      </BrowserRouter>

    </div>
     );
  }
}

 
export default connect(null, actions)(App);
