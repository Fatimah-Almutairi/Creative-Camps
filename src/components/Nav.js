import React from 'react'
// import { ChakraProvider } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

function Nav() {
    // console.log('Hello');
  return (
    <div className='header'>
        <Image className='logo' src='logo.png'/><a to='/HomePage'></a>
        <nav>
            <ul className='nav-link'>
                {/* <h2>Hello</h2> */}
                <li><Link to='/Programs'>Programs</Link></li>
                <li><Link to='/Events'>Events</Link></li>
                <li><Link to='/Activites'>Activites</Link></li>
                <Link to='/SignIn'><button className='btn'>Sign In</button></Link>

            </ul>
        </nav>

        
    </div>
  )
}

export default Nav