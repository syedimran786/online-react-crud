import React, { useEffect } from 'react'
import "./CSS/Popup.css"

function Popup({message,setshowpopup,bgcolor}) {

    useEffect(()=>
    {
       setTimeout(()=>
        {
            setshowpopup(false) 
        },5000)
    })
  return (
    <div className='popup-message' style={{backgroundColor:bgcolor}}>
        {message}
    </div>
  )
}

export default Popup