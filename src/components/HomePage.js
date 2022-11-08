import React from 'react'
import { SimpleGrid, Box , Image} from '@chakra-ui/react'

function HomePage() {
  return (
    <div>
        <SimpleGrid columns={2}  pr={0} mr={0}>
            <Box className='cont' height='80px'>
                <h1>Help Children Dream With <br/><span>Creative Camps</span> </h1>
                <p>"Help children dream and achieve theirs."</p></Box>
            <Box  pr={0} mr={0}><Image src= 'main.png' pr={0} mr={0}/></Box>
        </SimpleGrid>

        <div className='main'>

            <div className='container'>
                <div className='card'>
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default HomePage