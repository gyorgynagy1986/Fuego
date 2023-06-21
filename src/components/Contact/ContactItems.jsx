import React from 'react'


const textContent = {
  day: 'Hétfő - Vasárnap',
  time: '12:00 - 23:30'
}

const textContentEn = {
  day: 'Monday - Sunday',
  time: '12:00 - 23:30'
}


const ContactItems = ({lang}) => {
  return (
    <>
        <div>
            <p>{!lang ? textContent.day : textContentEn.day}</p>
            <p>{!lang ? textContent.time : textContentEn.time}</p>
         </div>
    </>
  )
}

export default ContactItems