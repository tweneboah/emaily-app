//Survey Fields contains the logic to render a single lable and text input
import React from 'react';

//Since we are calling this inside our redux form, redux form has given us a whole binch of methods
//We care about props.input . we have to pass all it into our field

export default ({input, label, meta: {error, touched}}) => {
  
    return (
        <div>
            <label>{label}</label>
           <input {...input} style={{marginBottom: '5px'}}/>
           {/* //Styling Error */}

          <div className='red-text' style={{marginBottom:'20px'}}>
           {touched && error}
           </div>
        </div>
    )
}