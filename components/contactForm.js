import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  weight: ['300', '500', '700'],
  display: 'swap'
})

export default function ContactForm() {

  const [invalid, setInvalid] = useState(false);
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleChange(e) {
    let val = e.target.value;
    setEmail(val);
    setInvalid(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (email == '') {
      setInvalid(true);
    } else {
      // const postData = async () => {
      //   const data = {
      //     first_name: first,
      //     last_name: last,
      //     title: title,
      //     email: email,
      //     message: message
      //   };
      //   const response = await fetch('https://api.mwi.dev/contact', {
      //     method: "POST",
      //     headers: { 'content-type': 'application/json' },
      //     body: JSON.stringify(data),
      //   });
      //   return response.json();
      // };
      // postData();
      setFirst('');
      setLast('');
      setTitle('');
      setEmail('');
      setMessage('');
    }
  }

  return (
    <form id={'contactForm'} className={styles.formContainer}>
      <div className={styles.inputContainer} id={'contactForm'}>
        <input
          className={`${styles.first} ${poppins.className}`}
          placeholder='First Name'
          name='first_name'
          type='text'
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <input
          className={`${styles.last} ${poppins.className}`}
          placeholder='Last Name'
          name='last_name'
          type='text'
          value={last}
          onChange={(e) => setLast(e.target.value)}
        />
        <input
          className={`${styles.title} ${poppins.className}`}
          placeholder='Title'
          name='title'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className={`${styles.email} ${poppins.className} ${invalid ? styles.emailInvalid : ''}`}
          placeholder='Email'
          name='email'
          type='text'
          value={email}
          onChange={handleChange}
          required
        />
        <input
          className={`${styles.message} ${poppins.className}`}
          placeholder='Message'
          name='message'
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        className={styles.button}
        onClick={handleSubmit}
        type='submit'
        formNoValidate
      >
        Submit
      </button>
      {invalid ? (
        <>
          <p className={styles.invalid}>Required</p>
        </>
      ) : (<></>)
      }
    </form>
  )
}