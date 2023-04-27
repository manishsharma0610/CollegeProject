import {
    Box,
    Button,
    Container,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FaWhatsapp } from 'react-icons/fa';
  import { EmailIcon, LockIcon, PhoneIcon } from '@chakra-ui/icons';
  import { GoLocation } from 'react-icons/go';
  
  
  
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('black')}
        color={useColorModeValue('white')}>
        <Container as={Stack} maxW={'95%'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '1fr 2fr 1fr 1fr' }}
            spacing={8}>
               <Stack >
              <Box m="auto">
              <Image h={{base:"90%",md:"80%",lg:"100%"}} src='https://user-images.githubusercontent.com/127972182/233780122-21befe27-7aa1-48b2-8d16-2b895a44a8b4.jpg'/>
              </Box>
            </Stack>
            <Stack >
              <Text fontSize={{base:'22px',lg:"17px"}} pt={{base:"30px",lg:"auto"}} fontWeight="450" align="start">
              Welcome to Hygiene India! Our mission is to reduce waste and promote sustainable living by collecting garbage and transforming it into useful products. We believe that by recycling and repurposing waste, we can create a cleaner and healthier environment for everyone.


              </Text>
            </Stack>
            <Stack align={'flex-start'}>
            <Heading fontSize="25px" color="yellow">Branches</Heading>
              <Button colorScheme={'black'}  leftIcon={<GoLocation />} href={'#'}>Near SBS Petrol Pump ,Bindra bajar,<br />Gambhirpur S.o, Uttar Pradesh</Button>
              <Button colorScheme={'black'}  leftIcon={<GoLocation />} href={'#'}>Lalganj Uttar Pradesh</Button>
            </Stack>
            <Stack align={'flex-start'}>
              <Heading fontSize="25px" color="yellow">contact</Heading>
              <Button
                variant={'solid'}
                colorScheme={'teal'}
                size={'lg'}
                mr={4}
                leftIcon={<FaWhatsapp/>}>
                <a  href="https://wa.me/+919643306955"> 9643306955</a>
              </Button>
              <Button
                variant={'solid'}
                colorScheme={'teal'}
                size={'lg'}
                mr={4}
                leftIcon={<PhoneIcon />}>
                <a href="tel:9643306955">96433-06955</a>
              </Button>
              <Button
                variant={'solid'}
                colorScheme={'teal'}
                size={'lg'}
                mr={4}
                leftIcon={<EmailIcon/>}>
                <a href = "manishsharma@yahoo.com">Send Email</a>
              </Button>
            </Stack>
            
          </SimpleGrid>
        </Container>
      </Box>
    );
  }