import React from 'react'

export const FormInput = ({ className, errorMsg, label, ...rest }) => {
  return (
        <div className={`form-group ${className}`}>
            <label htmlFor="name" className='form-label'>{ label }</label>
            <input id='name' className='form-control border-1' {...rest} />
            { errorMsg && <p className="invalid-input">{ errorMsg }</p>}
        </div>
  )
}
