import React, { useState } from 'react'
import { useFormik } from "formik";
import { FormInput } from './FormInput'
import { contactFormSchema } from '../../lib/ContactSchemas';
import { CiCircleCheck } from "react-icons/ci";
import axios from 'axios'


export const Form = () => {

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: contactFormSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post('https://js2-ecommerce-api.vercel.app/api/messages', values)
        console.log(res.data)
        setIsFormSubmitted(true)
        form.resetForm()
      }
      catch (error) {
        console.error('Something went wrong', error)
      }
    }
  })


  return (

    <div>
    {/* Show success message if form is submitted successfully */}
    
    <form onSubmit={form.handleSubmit} className='contact-form form-container' noValidate>
        <FormInput
            label="Name"
            id="name"
            name="name"
            type="text"
            value={form.values.name}
            onChange={form.handleChange}
            errorMsg={form.errors.name && form.touched.name && form.errors.name}
            onBlur={form.handleBlur}
        />
        <FormInput
            label="Email"
            id="email"
            name="email"
            type="email"
            value={form.values.email}
            onChange={form.handleChange}
            errorMsg={form.errors.email && form.touched.email && form.errors.email}
            onBlur={form.handleBlur}
        />
        <FormInput
            label="Message"
            id="message"
            name="message"
            type="text"
            value={form.values.message}
            onChange={form.handleChange}
            errorMsg={form.errors.message && form.touched.message && form.errors.message}
            onBlur={form.handleBlur}
        />

        {isFormSubmitted && <div className="success-msg">Form submitted successfully!</div>}

        <button type="submit" className="btn contact-send-btn">Send</button>
    </form>
    </div>
  )
}


