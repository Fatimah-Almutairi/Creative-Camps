import React from 'react'
import { SimpleGrid, Box , Image} from '@chakra-ui/react'
import {useState} from 'react'
import Modal from './Modal' 

function HomePage() {

          const [openModal, setOpen] = useState(false);

  return (
    <div>
        <SimpleGrid columns={2}  pr={0} mr={0}>
            <Box className='cont' height='80px'>
                <h1>Help Children Dream With <br/><span>Creative Camps</span> </h1>
                <p>"Help children dream and achieve theirs."</p></Box>
            <Box  pr={0} mr={0}><Image src= 'main.png' pr={0} mr={0}/></Box>
        </SimpleGrid>
   <div className='main'>
   {openModal && <Modal closeModal={setOpen} />}
            <div className='container'>
                <div className='card'>
                    <button className='openModal' onClick={() => {
                        setOpen(true)
                    }}><img src='img12.png' className='img' />
                    {/* <div className='card-title'>
                      <h1>Spot Think</h1>  
                    </div> */}
                    </button>
                </div>
                <div className='card'>
                <button className='openModal' onClick={() => {
                        setOpen(true)
                    }}><img src='img12.png' className='img' /></button> 
                    {/* <div className='card-title'>
                        <h1>Summer Club</h1>
                    </div> */}
                </div>
                <div className='card'>
                    <button className='openModal' onClick={() => {
                        setOpen(true)
                    }}> <img src='img12.png' className='img' /></button>
                    {/* <div className='card-title'>
                        <h1>Kids In Nature</h1>
                    </div> */}
                </div>
                <div className='card'>
                    <button className='openModal' onClick={() => {
                        setOpen(true)
                    }}> <img src='img12.png' className='img' /></button>
                    {/* <div className='card-title'>
                        <h1>Kids In Nature</h1>
                    </div> */}
                </div>

            </div>
        </div>

    </div>
  )
}

export default HomePage