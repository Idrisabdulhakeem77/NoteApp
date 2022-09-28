import React , { useEffect , useState} from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Navbar() {
    const [search , setSearch] = useState("")
  return (
   
        <nav> 
            <div className='nav-header'>
            <h1>NOTE APP</h1>
            </div>
            <div className='nav-search'>
            <input type="text" placeholder='Search'  onChange={(e) => setSearch(e.target.value)}/>
            </div>
                
            <ul className='links'>
                 <li> <a href="/">Notes</a></li>
                 <li> <a href="/create">Create Note</a></li>
            </ul>
          
            
        </nav>
  )
}

export default Navbar