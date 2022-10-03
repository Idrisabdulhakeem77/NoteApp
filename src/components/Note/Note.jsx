import React from 'react'
import {FaTrashAlt , FaEdit} from 'react-icons/fa'
import './note.css'
import axios from 'axios'

function Note({ id  , title , details , deleteNote }) {
 

  return ( 
    <>
    <div className='note'>
       <div className='note-header'>
       <h1>{title}</h1>
        <div > 
           <button className='btn' onClick={() => deleteNote(id)}>
              <FaTrashAlt/>
           </button>
        </div>
       </div>
        <div className='note-footer'>
        <p>{details}</p>
        </div>
        
      </div>
    
        </>
  )
}

export default Note

