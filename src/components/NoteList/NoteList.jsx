import axios from 'axios'
import React , {useState , useEffect }from 'react'
import Note from '../Note/Note'

function NoteList() {
  const [notes , setNotes] = useState([])

  const fetchNotes = async() => {
    const notes = await axios.get('http://localhost:8000/notes')
    const { data } = notes
    setNotes(data)
    console.log(data)
    
  }

  useEffect(() => {
       fetchNotes()
  } , [])
  return (
    <div>
          { notes.map((notes , index) => {
             return(
               <Note key={index} {...notes}/>
             )
          })}
    </div>
  )
}

export default NoteList