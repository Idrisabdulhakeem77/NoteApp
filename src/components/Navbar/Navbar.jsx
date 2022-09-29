import React , {  useState} from 'react'
import "./navbar.css"
import { NavLink } from 'react-router-dom'


function Navbar() {
    const [search , setSearch] = useState("")
  return (
   
        <nav> 
            <div className='nav-header'>
            <h1><NavLink to='/'>NOTE APP</NavLink></h1>
            </div>
            <div className='nav-search'>
            <input type="text" placeholder='Search' value={search}  onChange={(e) => setSearch(e.target.value)}/>
            </div>
                
            <ul className='links'>
                 {/* <li> <a href="/">Notes</a></li>
                 <li> <a href="/create">Create Note</a></li> */}
                 <NavLink to='/'className="nav-link"> Notes</NavLink> 
                 <NavLink to='create' className="nav-link"> Create Note</NavLink>
            </ul>
          
            
        </nav>
  )
}

export default Navbar