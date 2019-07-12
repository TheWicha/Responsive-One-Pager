import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
export default [
  {
    icon: <FontAwesomeIcon icon={faMapMarkedAlt} />,
    type: "address",
    text: "Wodna 123, Poznań"
  },
  {
    icon:<FontAwesomeIcon icon={faEnvelope} />,
    type: "email",
    text: "hello@yourdomain.com"
  },
  {
    icon:<FontAwesomeIcon icon={faMobileAlt} />,
    type: "phone",
    text: "+48 555-000-111"
  },
]