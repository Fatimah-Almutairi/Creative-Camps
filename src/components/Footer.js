export default function Footer() {
  return (
    <>
<footer class="footer-distributed">

<div class="footer-right">  <p class="footer-links">
    <a class="link-1" href="#"><img src="social1.png" /></a>
    <a class="link-1" href="#"><img src="social2.png" /></a>
    <a class="link-1" href="#"><img src="social3.png" /></a>

  </p>

</div>

<div class="footer-left">
<img src="logo.png" />
{/* <p>© 2022 Creative Camps Team. All rights reserved</p> */}

</div>

</footer>
        </>
  );
}


// import {
//   Box,
//   chakra,
//   Container,
//   Stack,
//   useColorModeValue,
//   VisuallyHidden,
//   Image,
// } from '@chakra-ui/react';
// import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { ReactNode } from 'react';

// const SocialButton = ({
//   children,
//   label,
//   href,
// }) => {
//   return (
//     <chakra.button
//       bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
//       rounded={'full'}
//       w={8}
//       h={8}
//       cursor={'pointer'}
//       as={'a'}
//       href={href}
//       display={'inline-flex'}
//       alignItems={'center'}
//       justifyContent={'center'}
//       transition={'background 0.3s ease'}
//       _hover={{
//         bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
//       }}>
//       <VisuallyHidden>{label}</VisuallyHidden>
//       {children}
//     </chakra.button>
//   );
// };

// export default function SmallWithSocial() {
//   return (
//     <Box 
//       bg={useColorModeValue('#f9f9f9')}
//       color={useColorModeValue('gray.700', 'gray.200')}>
//       <Container
//         as={Stack}
//         maxW={'6xl'}
//         py={4}
//         direction={{ base: 'column', md: 'row' }}
//         spacing={4}
//         justify={{ base: 'center', md: 'space-between' }}
//         align={{ base: 'center', md: 'center' }}>
//         <Image   src='./IMG/logo.png' ></Image>
        
//         <Stack direction={'row'} spacing={6}>
//           <SocialButton label={'Twitter'} href={'#'}>
//             <FaTwitter />
//           </SocialButton>
//           <SocialButton label={'YouTube'} href={'#'}>
//             <FaYoutube />
//           </SocialButton>
//           <SocialButton label={'Instagram'} href={'#'}>
//             <FaInstagram />
//           </SocialButton>
//         </Stack>
//       </Container>
//     </Box>
//   );
// }