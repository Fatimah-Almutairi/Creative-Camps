import React from 'react'
import { SimpleGrid, Box ,Center} from '@chakra-ui/react'

function HomePage() {
  return (
    <div className='contener'>
        <div className='main'>
        <SimpleGrid columns={2} mr={0} pr={0}>
            <div className='cont' w='500px' h='auto' >
                <h1>Title maybe name the website</h1>
                <p>Some text here about the website or about the services</p></div>
            <div w='500px' h='80px' className='main-img'>
                <img src= 'main2.png'/></div>
        </SimpleGrid>

            {/* <div className='cont' >
            <h1>Title maybe name the website</h1>
            <p>Some text here about the website or about the services</p>
            </div>
            <img src= 'main.png' className='main-img'/> */}

        </div>

    </div>
  )
}

export default HomePage