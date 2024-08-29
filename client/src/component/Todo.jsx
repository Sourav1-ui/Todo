import axios from 'axios';
// Importing the Axios library for making HTTP requests.
import React from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { baseURL } from '../../util/constant';
const Todo = ({text,id,setUpdateUI,setShowPopup,setPopupContent}) => {

//delete todo
const deleteTodo=()=>{
  axios.delete(`${baseURL}/delete/${id}`).then(res=>{
    console.log(res.data)

    //After delete update the UI
    setUpdateUI((prevState)=>!prevState) 
  })                             
}

//update todo
const updatetodo=()=>{
   //show the popup, because the etShowPopup value is true.
   setPopupContent({text,id})
  setShowPopup(true)
}

  return (
    <div className="toDo">
        {text}
        <div className='icons'>
            <CiEdit className='icon' onClick={updatetodo}/>
            <MdDeleteForever className='icon' onClick={deleteTodo}/>
        </div>
        </div>
  )
}
export default Todo

//In summary, App.jsx manages the overall application structure, state,and interaction with the server,
// while Todo.jsx defines the presentation and behavior of individual todo items.





