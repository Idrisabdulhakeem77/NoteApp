import React from 'react'
import {FaTrashAlt , FaEdit} from 'react-icons/fa'

function Note({ id  , title , details}) {
  return ( 
    <article>
        <div className='btn'>
            <button>
               <FaEdit/>
            </button>
            <button>
               <FaTrashAlt/>
            </button>
        </div>
        <h1> { title}</h1>
        <p> { details}</p>
    </article>
  )
}

export default Note