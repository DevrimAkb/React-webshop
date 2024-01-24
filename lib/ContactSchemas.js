import * as Yup from 'yup'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const contactFormSchema = Yup.object({
    name: Yup.string()
    .required('You need to enter a name')
    .min(2, 'Your name needs to be atleast 2 characters long'),

    email: Yup.string()
    .required('You need to enter an email adress')
    .matches(emailRegex, 'You need to enter a valid email address'),

    message: Yup.string()
    .required('You need to write a message')
    .min(3, 'Your message needs to be atleast 3 characters long')
  })