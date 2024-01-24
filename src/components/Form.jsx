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






// export const Form = () => {

//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [message, setMessage] = useState('')

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         try {
//             const res = await axios.post('https://js2-ecommerce-api.vercel.app/api/messages', {
//                 name,
//                 email,
//                 message
//             })
//             if(res.status === 200) {
//                 console.log('Message sent successfully')
//                 setName('')
//                 setEmail('')
//                 setMessage('')
//             }
//             else {
//                 console.log('Something went wrong')
//             }
//         } 
//         catch(error) {
//             console.log('Error submitting the form', error)
//         }
//     }

//     const validate = () => {

//         return 
//     }

//   return (
//     <form onSubmit={handleSubmit} className="contact-form">
//         <div className="form-group">
//             <label htmlFor="name" className='form-label'>Name</label>
//             <input type="text" id='name' className='form-control' value={name} onChange={e => setName(e.target.value)} />
//            <p className="invalid-input">Error message</p>
//         </div>
//         <div className="form-group">
//             <label htmlFor="email" className='form-label'>Email</label>
//             <input type="email" id='email' className='form-control' value={email} onChange={e => setEmail(e.target.value)} />
//             <p className="invalid-input">Error message</p>
//         </div>
//         <div className="form-group">
//             <label htmlFor="message" className='form-label'>Your message</label>
//             <textarea name="message" id="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
//             <p className="invalid-input">Error message</p>
//         </div>
//         <button type="submit" className="btn contact-send-btn">Send</button>
//     </form>
//   )
// }
