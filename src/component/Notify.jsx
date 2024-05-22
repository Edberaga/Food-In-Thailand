import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { NotifyKey, EmailAPIKey } from '../data/emailContent'
import { toast } from 'react-toastify'
import '../assets/styles/notify.scss'

const Notify = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(NotifyKey.service, NotifyKey.template, form.current, EmailAPIKey.publicKey)
    .then((result) => {
      console.log(result.text);
      toast.success("Mail sent succesfully");
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <input type="email" name="from_email" id="" placeholder='Enter your Email' />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Notify