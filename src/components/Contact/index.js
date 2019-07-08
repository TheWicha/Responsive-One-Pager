import React from 'react'
import './style.scss'
import ContactBox from './ContactBox';
import contacts from './ContactBox/contactInfo'
import Socials from './Socials';

function Contact(props) {
  return (
    <section className='contact'>
      <div className='contact-wrapper'>
        {contacts.map(contact => (
          <ContactBox
            icon={contact.icon}
            type={contact.type}
            text={contact.text}
          />
        ))}
      </div>
      <Socials />
    </section>
  )
};


export default Contact;
