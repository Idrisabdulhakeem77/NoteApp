import React from 'react'
import { useState } from 'react'
import './form.css'
function Form() {

  const [note , setNote] = useState({
     title : "" ,
     details : ""
  })

  const handleSubmit = (e) => {
     e.preventDefault()


     console.log(note)
  }

  const handleChange = (e) => {
     setNote({...note , [e.target.name] : e.target.value})
  }
  return (
    <div className='form' > 
        <form>
          <h1> Add A New Note</h1>
          <div className='form-control'>
            <label>Enter Note Title</label>
          <input type="text"  name='title' value={note.title}  onChange={handleChange}/>
          </div>

         <div className='form-control'>
           <label>Enter Note Details</label>
         <textarea name="details" value={note.details}  onChange={handleChange}></textarea>
            
         </div>
         <button onClick={handleSubmit}> Add Note</button>
        </form>
         
</div>
  )
}

export default Form