import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Form from './components/Form/Form'
import NoteList from './components/NoteList/NoteList'

function App() {
  return (
    <>
      
      <Navbar/>
       <Routes>
         <Route path='/' element={<NoteList/>}></Route>
         <Route path="create"  element={<Form/>}></Route>
       </Routes>
    </>

          
  )
}

export default App