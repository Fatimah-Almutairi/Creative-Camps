import React from 'react'
// import { ChakraProvider } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

function Nav() {
    // console.log('Hello');
  return (
    <div className='header'>
        <Image className='logo' src='logo.png'/><a href='/HomePage'></a>
        <nav>
            <ul className='nav-link'>
                {/* <h2>Hello</h2> */}
                <li><Link href='/Programs'>Programs</Link></li>
                <li><Link href='/Events'>Events</Link></li>
                <li><Link href='/Activites'>Activites</Link></li>
                <Link href='#'><button className='btn'>Sign In</button></Link>

            </ul>
        </nav>

        
    </div>
  )
}

export default Nav