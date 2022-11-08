import React from 'react'
import { SimpleGrid, Box , Image} from '@chakra-ui/react'

function HomePage() {
  return (
    <div className='contener'>
        <SimpleGrid columns={2}  pr={0} mr={0}>
            <Box className='cont' height='80px'>
                <h1>Title maybe name the website</h1>
                <p>Some text here about the website or about the services</p></Box>
            <Box  pr={0} mr={0}><Image src= 'main.png' pr={0} mr={0}/></Box>
        </SimpleGrid>

    </div>
  )
}

export default HomePage