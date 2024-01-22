import React from 'react'
import { Form } from 'react-router-dom'

function Contact() {
  return (
    <div className='form-wrapper'>
        <div className="left">
            <h1>Contact us!</h1>
        </div>  
        <div className="right">
            <Form />
        </div>  
    </div>
  )
}

export default Contact