
// import NavBar from '../components/NavBar'
import '../styles/contact.scss'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import support from '../assets/support.png'
// import customer from '../assets/customer.png'
import  a from '../assets/a.jpg'
function Contact() {
  const form = useRef();
 const [name,setName]=useState();
 const [email,setEmail]=useState();
 const [message,setMessage]=useState();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_gl9rmwo', 'template_cwmdt4d', form.current, 'tSLR2qru7J-nJiMJY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setName('');
      setEmail('');
      setMessage('');
  };
  return (
    <div className='contact'>
   
 
      <div >
        <img src={a}/>
      </div>


<section className='container-contact'>
    
 
    <form  ref={form} onSubmit={sendEmail}>
    <h1><img src={support} />Get In <span>Touch</span></h1>
      {/* <label>Name</label> */}
      <input type="text" name="name" placeholder='Name' value={name}/>
      {/* <label>Email</label> */}
      <input type="email" name="email" placeholder='Email' value={email}/>
      {/* <label>Message</label> */}
      <textarea name="message" placeholder='Message' value={message}/>
      <input className=' submit' type="submit" value="Send" />
    </form>

</section>
    </div>
  )
}

export default Contact
