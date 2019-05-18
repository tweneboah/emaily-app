import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions' //taking all actions and assign to actions
//ROUTES
import Header from './Header'


const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>ServeyNew</h2>
const Landing = () => <h2>Landing</h2>


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
             <Route exact path='/surveys' component={SurveyNew} />
        </div>
      </BrowserRouter>

    </div>
     );
  }
}

 
export default connect(null, actions)(App);
