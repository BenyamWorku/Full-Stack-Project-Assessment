/** @format */
import React, { useState } from 'react'
import "./addVideo.css"
import uuid from 'react-uuid'
export default function Addvideo({callbackAdd}) {
  const [newVideo, setNewVideo] = useState({ id:"",title: "", url: "", rating: 0 });
  const [isVisible, setIsVisible] = useState("false");
  const [buttonText,SetButtonText]=useState("Expand form")
  function handleChange(e) {
    const value = e.target.value;
    setNewVideo({ ...newVideo, id:uuid() , rating: newVideo.rating, [e.target.id]: value });
  }
  
  return (
    <div>
      
      <button className="btn  btn-link" type="button"
        onClick={() => {
          setIsVisible(!isVisible);
          isVisible?SetButtonText("Collapse form"):SetButtonText("Expand form")
        }}
      >  {buttonText}
      </button>
     
      
    <div  >
      <form className={isVisible?'hide':'show'} >
        <div className="form-group w-50 " >
          <label for="title" >Title</label>
          <input onChange={handleChange} onPaste={handleChange }  type="text" className="form-control " id="title"  placeholder="Enter Video Title"/> 
        </div>
        <div className="form-group w-50">
          <label for="url">URL</label>
            <input onChange={handleChange} onPaste={handleChange } type="text" className="form-control " id="url" placeholder="Enter URL"/>
        </div>
           <button onClick={()=>callbackAdd(newVideo)} type="button" className="m-1 position-absolute start-0 btn btn-primary">Add video</button>
          <button onClick={()=>setIsVisible(!isVisible) } type="button" className="m-1 position-absolute start-10 btn btn-danger" >Cancel</button>
      </form>
         
    </div>      
  </div>
    )
}
