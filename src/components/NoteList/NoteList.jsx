import axios from 'axios'
import React , {useState , useEffect }from 'react'
import './notelist.css'
import Note from '../Note/Note'

function NoteList() {
  const [notes , setNotes] = useState([])

  const fetchNotes = async() => {
    const notes = await axios.get('http://localhost:8000/notes')
    const { data } = notes
    setNotes(data)
    console.log(data)
    
  }


  const deleteNote = async(id) => {
      
      const newList = notes.filter(note => note.id !== id)
      setNotes(newList)
      await axios.delete(`http://localhost:8000/notes/${id}`)
      console.log( newList)
  }

  useEffect(() => {
       fetchNotes()
  } , [])
  return (
    <section className='section'>
       <h1 className='section-title'> NOTES</h1>
         <div className='note-container'>
          { notes.map((notes , index) => {
             return(
               <Note key={index} {...notes} deleteNote={deleteNote}/>
             )
          })}
    </div>
    </section>

   
   
  )
}

export default NoteList