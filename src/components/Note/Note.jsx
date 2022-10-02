import React from 'react'
import {FaTrashAlt , FaEdit} from 'react-icons/fa'
import './note.css'
import axios from 'axios'

function Note({ id  , title , details , deleteNote ,editItem}) {
 

  return ( 
    <>
    <div className='note'>
      <div className='note-info'>
      <div className='note-title'>
      <h1> { title}</h1>
      </div>
     
        <div className='btn'>
            <button onClick={() => editItem(id)}>
               <FaEdit/>
            </button>
            <button onClick={ () => deleteNote(id)}>
               <FaTrashAlt/>
            </button>
        </div>
      </div>
      <p> { details}</p>

        </div>
        </>
  )
}

export default Note

