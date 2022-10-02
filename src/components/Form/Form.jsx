import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './form.css'


function Form() {
  const navigate = useNavigate()

  const [note , setNote] = useState({
     title : "" ,
     details : ""
  })

  const handleSubmit = async(e) => {
     e.preventDefault()
      
     const { title , details} = note

     if(!title || !details)  {
         return 
     } 

      await axios.post('http://localhost:8000/notes' ,  {title , details})
       
      navigate('/')
      
   
    

  }

  const handleChange = (e) => {
     setNote({...note , [e.target.name] : e.target.value})
  }
  return (
    <div className='form' > 
        <form onSubmit={handleSubmit}> 
          <h1> Add A New Note</h1>
          <div className='form-control'>
            <label>Enter Note Title</label>
          <input type="text"  name='title' value={note.title}  onChange={handleChange}/>
          </div>

         <div className='form-control'>
           <label>Enter Note Details</label>
         <textarea  name="details" value={note.details}  onChange={handleChange} rows="4" cols="50"></textarea>
            
         </div>
         <button> Add Note</button>
        </form>
         
</div>
  )
}

export default Form