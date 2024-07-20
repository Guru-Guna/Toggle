import React, { useState } from 'react';
import "./ToggleComponent.css"
import image from "../../assets/images/eye.png"
const ToggleComponent = () => {
    const [visible,setVisible]=useState(false)
    
    const ShowDetailsHandler=()=>{
        if(visible){
            setVisible(false)
        }else{
            setVisible(true)
        }
        
    }
  return (
    <main>
        <div className='container'>
        <img src={image} alt="profile" style={{ height: '100px' }}/>
        <h1>Name: GUNASEELAN G</h1>
        <h3>Reg No: 212221230031</h3>
        <button onClick={ShowDetailsHandler}>Show Details</button>
        {visible && <h3>WELCOME</h3>}
        </div>
    </main>
  )
}

export default ToggleComponent