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
            <h1> Encourage Kids To Dream <br /><span>Creative Camps</span></h1>
          <p> "Sometimes, a dream can make children stronger to change that reality. So for this reason, it is necessary to encourage kids to dream." </p></Box>
            <Box  pr={0} mr={0}><Image src= 'main11.png' pr={0} mr={0}/></Box>
        </SimpleGrid>
   <div className='main'>
   <h1 className='h1'> Most Import Programs</h1>
            <div className='container'>
            {openModal && <Modal closeModal={setOpen} />}
                <div className='card'>
                    <button className='openModal' onClick={() => {
                        setOpen(true)
                    }}><img src='img1.png' className='img' />
                    {/* <div className='card-title'>
                      <h1>Spot Think</h1>  
                    </div> */}
                    </button>
                </div>
                <div className='card'>
                <button className='openModal' onClick={() => {
                        setOpen(true)
                        
                    }}><img src='img2.png' className='img' /></button> 
                    {/* <div className='card-title'>
                        <h1>Summer Club</h1>
                    </div> */}
                </div>
                <div className='card'>
                    <button className='openModal' onClick={() => {
                        setOpen(true)
                    }}> <img src='img3.png' className='img' /></button>
                    {/* <div className='card-title'>
                        <h1>Kids In Nature</h1>
                    </div> */}
                </div>
                <div className='card'>
                    <button className='openModal' onClick={() => {
                        setOpen(true)
                    }}> <img src='img4.png' className='img' /></button>
                    {/* <div className='card-title'>
                        <h1>Kids In Nature</h1>
                    </div> */}
                </div>

            </div>
            <h1 className='h1'> New Events</h1>
            <div className='container'>
            
            <div className='card'>
                <button className='openModal' onClick={() => {
                    setOpen(true)
                }}><img src='img5.png' className='img' />
                {/* <div className='card-title'>
                  <h1>Spot Think</h1>  
                </div> */}
                </button>
            </div>
            <div className='card'>
            <button className='openModal' onClick={() => {
                    setOpen(true)
                }}><img src='img6.png' className='img' /></button> 
                {/* <div className='card-title'>
                    <h1>Summer Club</h1>
                </div> */}
            </div>
            <div className='card'>
                <button className='openModal' onClick={() => {
                    setOpen(true)
                }}> <img src='img7.png' className='img' /></button>
                {/* <div className='card-title'>
                    <h1>Kids In Nature</h1>
                </div> */}
            </div>
            <div className='card'>
                <button className='openModal' onClick={() => {
                    setOpen(true)
                }}> <img src='imgE1.png' className='img' /></button>
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