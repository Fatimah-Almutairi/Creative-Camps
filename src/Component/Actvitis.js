import { Image,Box } from '@chakra-ui/react'


import React from 'react'

function Actvitis() {
  return (
    <div>
    <div className='container'>
<Box className='IMG-1' >
  <Image src='IMG/img-1.png' />
<p></p>
</Box>
<Box className='IMG-2'>
  <Image src='IMG/img-2.JPG'  />
</Box>
<Box className='IMG-3'>
  <Image src='IMG/img-3.JPG' alt='Dan Abramov' />
</Box>
<Box className='IMG-4'>
  <Image src='IMG/img-4.jpg' alt='Dan Abramov' />
</Box>



    </div>
    </div>
  )
}

export default Actvitis