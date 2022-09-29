import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Form from './components/Form/Form'

function App() {
  return (
    <>
      
      <Navbar/>
       <Routes>
         <Route path="create"  element={<Form/>}></Route>
       </Routes>
    </>

          
  )
}

export default App