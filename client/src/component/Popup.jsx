import axios from 'axios'
import React, { useState } from 'react'
import {RxCross1} from 'react-icons/rx'
import { baseURL } from '../../util/constant'

const Popup = ({setShowPopup,popupContent,setUpdateUI}) => {
    const[input,setInput]=useState(popupContent.text)

  const updateTodo=()=>{
    axios.put(`${baseURL}/update/${popupContent.id}`,{toDo:input})
    .then((res)=>{
        console.log(res.data)
        setUpdateUI((prevState)=>!prevState)
        setShowPopup(false)

    })
  }


  return (
    <div className='backdrop'>
        <div className="popup">
            <RxCross1 className="cross" onClick={()=>setShowPopup(false)}/>  
            {/*  setShowPopup value is false. its means when we click the cross icon , popup is hide */}
            <h1>Update Todo</h1>
            <div className="popup__input_holder">
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Update ToDo..."
          />
          <button onClick={updateTodo}>Update</button>
            </div>
        </div>
    </div>
  )
}

export default Popup