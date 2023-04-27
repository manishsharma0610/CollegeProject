import { useForm, ValidationError } from '@formspree/react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
  Input,
  Text,
  Image,
  Heading,
  Flex,
  AlertIcon,
  Alert,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

export default function Main() {
  const [state, handleSubmit] = useForm('xrgvrlkz');

  if (state.succeeded) {
    return <Alert
    status='success'
    variant='subtle'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    height='200px'
  >
    <AlertIcon boxSize='40px' mr={0} />
    <AlertTitle mt={4} mb={1} fontSize='lg'>
    Your Details Has Been Submited
    </AlertTitle>
    <AlertDescription maxWidth='sm'>
      Thanks for Contacting. Our team will get back to you soon.
    </AlertDescription>
  </Alert>;
  }

  return (
    <Flex w={{base:"100%",lg:"100%"}} bgColor="gray.100">
    <Box
    border="3px solid black"
    bgColor="#cfe6fb"
    borderRadius="10px"
    w="100%"
    p="20px"
    pt="40px"
    mt="30px"
    mb="30px"
    pb="50px"
      as="form"
      onSubmit={handleSubmit}
      maxW={{base:"70%",md:"50%",lg:"30%"}}
      mx="auto"
    >
      <Heading>Contect Form</Heading>
      <FormControl isInvalid={state.errors.name}>
        <FormLabel htmlFor="email">Name</FormLabel>
        <Input border="3px solid black" id="name" type="name" name="name" isRequired />
        <FormErrorMessage>
          <ValidationError
            prefix="name"
            field="name"
            errors={state.errors}
          />
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={state.errors.number}>
        <FormLabel htmlFor="Number">Number</FormLabel>
        <Input border="3px solid black" id="number" type="number" name="number" isRequired />
        <FormErrorMessage>
          <ValidationError
            prefix="Number"
            field="Number"
            errors={state.errors}
          />
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={state.errors.age}>
        <FormLabel htmlFor="Number">Email</FormLabel>
        <Input border="3px solid black" id="email" type="email" name="email" isRequired />
        <FormErrorMessage>
          <ValidationError
            prefix="Email"
            field="Email"
            errors={state.errors}
          />
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={state.errors.message} mt={4}>
        <FormLabel htmlFor="message">Message</FormLabel>
        <Textarea border="3px solid black" id="message" name="message" />
        <FormErrorMessage>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </FormErrorMessage>
      </FormControl>
      <Button bgColor="#ffffff" type="submit" disabled={state.submitting} mt={4} w="100%">
        SUBMIT
      </Button>
    </Box>





     <Box   w="65%">
    <Flex gap="40px" mt="150px">
     <Box bgColor="#cfe6fb" borderRadius="16px" border="3px solid black" w="30%"> 
     <Heading>Address</Heading>
     <Text fontSize="20px" fontWeight="500">GFI Clean Roads India,

7B Pretoria Street, Kolkata

West Bengal, 700071</Text>
     </Box>

     <Box bgColor="#cfe6fb" borderRadius="16px" border="3px solid black" w="30%"> 
     <Heading>Email</Heading>
     <Text fontSize="20px" fontWeight="500">manishsharma0610@yahoo.com</Text>
     </Box>

     <Box bgColor="#cfe6fb" borderRadius="16px" border="3px solid black" w="30%"> 
     <Heading>Phone</Heading>
     <Text fontSize="20px" fontWeight="500">9643306955</Text>
     </Box>
    
     </Flex>
     <Box w="40%" m="auto" mt="50px">
      <Image borderRadius="19px"  src="https://user-images.githubusercontent.com/127972182/233780122-21befe27-7aa1-48b2-8d16-2b895a44a8b4.jpg" />
      </Box>
     </Box>
    </Flex>
  );
}