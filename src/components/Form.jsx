import React from 'react'

export const Form = () => {
  return (
    <form className="contact-form">
        <div className="form-group">
            <label htmlFor="firstName" className='form-label'>First name</label>
            <input type="text" id='firstName' className='form-control' />
            <p className="invalid-input">Error message</p>
        </div>
        <div className="form-group">
            <label htmlFor="lastName" className='form-label'>Last name</label>
            <input type="text" id='lastName' className='form-control' />
            <p className="invalid-input">Error message</p>
        </div>
        <div className="form-group">
            <label htmlFor="email" className='form-label'>Email</label>
            <input type="email" id='email' className='form-control' />
            <p className="invalid-input">Error message</p>
        </div>
        <div className="form-group">
            <label htmlFor="message" className='form-label'>Your message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            <p className="invalid-input">Error message</p>
        </div>
        <button className="btn submit-btn">Send</button>
    </form>
  )
}
