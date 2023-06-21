import React from 'react'


const textContent = {
  day: 'Monday - Sunday',
  time: '12:00 - 23:30'
}


const ContactItems = () => {
  return (
    <>
        <div>
            <p>{textContent.day}</p>
            <p>{textContent.time}</p>
         </div>
    </>
  )
}

export default ContactItems