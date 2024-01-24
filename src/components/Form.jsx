import React, { useState } from 'react'
import { useFormik } from "formik";
import { FormInput } from './FormInput'
import { contactFormSchema } from '../../lib/Schemas';


export const Form = () => {

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: contactFormSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })


  return (
    <form onSubmit={form.handleSubmit} className='contact-form' noValidate>
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

        <button type="submit" className="btn contact-send-btn">Send</button>
    </form>
  )
}


