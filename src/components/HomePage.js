import React from 'react'
import { SimpleGrid, Box , Image,   Modal, ModalOverlay,
    ModalContent, ModalHeader, ModalFooter, ModalBody,useDisclosure,
    ModalCloseButton, Button} from '@chakra-ui/react'

function HomePage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
        <SimpleGrid columns={2}  pr={0} mr={0}>
            <Box className='cont' height='80px'>
                <h1>Help Children Dream With <br/><span>Creative Camps</span> </h1>
                <p>"Help children dream and achieve theirs."</p></Box>
            <Box  pr={0} mr={0}><Image src= 'main.png' pr={0} mr={0}/></Box>
        </SimpleGrid>

        <h1 className='h1'> Most Import Programs</h1>
<div className='main'>
  
    <div className='card' onClick={onOpen}>
      <img src='img12.png' className='img' /></div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay /> <ModalContent>
          <ModalHeader><h1>Title for Cards here!</h1></ModalHeader><ModalCloseButton />
          <ModalBody> <p>  the complete for body and descriptions about the program here...</p></ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}> Favorite</Button>
            <Button variant='ghost'>Register</Button></ModalFooter>
        </ModalContent>
      </Modal>
       {/* Card 2 */}
       <div className='card' onClick={onOpen}>
      <img src='img2.png' className='img' /></div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay /> <ModalContent>
          <ModalHeader><h1>Title for Cards here!</h1></ModalHeader><ModalCloseButton />
          <ModalBody> <p>  the complete for body and descriptions about the program here...</p></ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}> Favorite</Button>
            <Button variant='ghost'>Register</Button></ModalFooter>
        </ModalContent>
      </Modal>
      <div className='card' onClick={onOpen}>
      <img src='img3.png' className='img' /></div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay /> <ModalContent>
          <ModalHeader><h1>Title for Cards here!</h1></ModalHeader><ModalCloseButton />
          <ModalBody> <p>  the complete for body and descriptions about the program here...</p></ModalBody>
          <ModalFooter>
            <Button variant='ghost' mr={3}> Favorite</Button>
            <Button colorScheme='blue'>Register</Button></ModalFooter>
        </ModalContent>
      </Modal>      
      <div className='card' onClick={onOpen}>
      <img src='img4.png' className='img' /></div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay /> <ModalContent>
          <ModalHeader><h1>Title for Cards here!</h1></ModalHeader><ModalCloseButton />
          <ModalBody> <p>  the complete for body and descriptions about the program here...</p></ModalBody>
          <ModalFooter>
            <Button variant='ghost' mr={3}> Favorite</Button>
            <Button colorScheme='blue'>Register</Button></ModalFooter>
        </ModalContent>
      </Modal>
      </div>
      <h1 className='h1'> New Events</h1>
      <div className='main'>

    <div className='card' onClick={onOpen}>
      <img src='img12.png' className='img' /></div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay /> <ModalContent>
          <ModalHeader><h1>Title for Cards here!</h1></ModalHeader><ModalCloseButton />
          <ModalBody> <p>  the complete for body and descriptions about the program here...</p></ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}> Favorite</Button>
            <Button variant='ghost'>Register</Button></ModalFooter>
        </ModalContent>
      </Modal>
       {/* Card 2 */}
       <div className='card' onClick={onOpen}>
      <img src='img2.png' className='img' /></div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay /> <ModalContent>
          <ModalHeader><h1>Title for Cards here!</h1></ModalHeader><ModalCloseButton />
          <ModalBody> <p>  the complete for body and descriptions about the program here...</p></ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}> Favorite</Button>
            <Button variant='ghost'>Register</Button></ModalFooter>
        </ModalContent>
      </Modal>
      <div className='card' onClick={onOpen}>
      <img src='img3.png' className='img' /></div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay /> <ModalContent>
          <ModalHeader><h1>Title for Cards here!</h1></ModalHeader><ModalCloseButton />
          <ModalBody> <p>  the complete for body and descriptions about the program here...</p></ModalBody>
          <ModalFooter>
            <Button variant='ghost' mr={3}> Favorite</Button>
            <Button colorScheme='blue'>Register</Button></ModalFooter>
        </ModalContent>
      </Modal>      
      <div className='card' onClick={onOpen}>
      <img src='img4.png' className='img' /></div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay /> <ModalContent>
          <ModalHeader><h1>Title for Cards here!</h1></ModalHeader><ModalCloseButton />
          <ModalBody> <p>  the complete for body and descriptions about the program here...</p></ModalBody>
          <ModalFooter>
            <Button variant='ghost' mr={3}> Favorite</Button>
            <Button colorScheme='blue'>Register</Button></ModalFooter>
        </ModalContent>
      </Modal>
      </div>

    </div>
  )
}

export default HomePage