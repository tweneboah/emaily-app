//Survey new shows survey form and survey review
import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form'
import SurveyField from './SurveyField'
import { Link } from 'react-router-dom'

class SurveyForn extends Component {
  
    renderFields() {
        return (
            <div>
                  <Field 
                   type='text'
                   name="title"
                   component={SurveyField}
                   label='survey Title'
                  />
                 
                 <Field 
                   type='text'
                   name="subject"
                   component={SurveyField}
                   label='Subject Line'
                  />


                  <Field 
                   type='text'
                   name="body"
                   component={SurveyField}
                   label='Email Body'
                  />

                  <Field 
                   type='text'
                   name="email"
                   component={SurveyField}
                   label='Recipeints List'
                  />

            </div>
        )
    }
    render() { 
        console.log('Redux form', this.props)
        return ( 
            <div>
            <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
             
                  {this.renderFields()}

                  <Link to='/surveys' className='red btn-flat white-text'>
                      Cancel
                  </Link>
               <button 
               type='submit' className='teal btn-flat right white-text'>Next
               </button>
               </form>
            </div>
         );
    }
}
//VALIDATION
function validate (values) {
  //The values are the values coming from the input fields
  
   const errors = {}

   if(!values.title) {
       errors.title = ' You must provide a title '
   }

   if(!values.subject) {
    errors.subject = ' You must provide a subject '
}

if(!values.body) {
    errors.body = ' You must provide a body '
}


   return errors;
} 


export default reduxForm({
    validate: validate,
   form: 'surveyForm' 
}) (SurveyForn);