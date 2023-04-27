import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  InputGroup,
  HStack,
  InputRightElement,
  Button,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Main from "./Contect";
import Type from "./Typs";
import Slider from "./Slider";
import { Swat } from "./swat";
const details = {
  title: "",
  Description: "",
  Date: "",
};
const notes = JSON.parse(localStorage.getItem("notes")) || [];

export default function User() {
  const navigate=useNavigate()
  const [data, setData] = useState(details);

  // from data store krne ke liye us kiya
  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }
  // click krne pe sara data localstorage me store kr ra hu
  function handleSubmit(e) {
    e.preventDefault();
    let x = [...notes, data];
    localStorage.setItem("notes", JSON.stringify(x));
    alert("New Customer Added");
    navigate("/data")
    
  }

  return (
    <Box mt="20px">
      <Slider/> 
      <Type/> 
      <Main/> 
      <Swat/>  
    <Flex minH={"600px"} align={"center"} justify={"center"} bgColor="#f6fafd" mt="-20px"
    // bgImage="url('https://www.tripsavvy.com/thmb/lzir73sXI1-qVOZGF7PFH-8NhTw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-484189251-5959b1f23df78c4eb691345e.jpg')"
    >
      <Stack spacing={20} mx={"auto"} maxW={"lg"} py={12} px={6} w="550px">
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white","gray.700 ")}
          boxShadow={"lg"}
          p={7}
        >
          <Stack spacing={1}>
              <Box>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    w="100%"
                    type="text"
                    name="name"
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="contact">
                  <FormLabel>Contact Number</FormLabel>
                  <Input
                    type="Number"
                    name="contact"
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="text"
                    name="email"
                    onChange={(e) => handleChange(e)}
                  />  
                </FormControl>
              </Box>
              <Box>
                <FormControl id="img">
                  <FormLabel>Image</FormLabel>
                  <Input
                    type="text"
                    name="image"
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="address">
                  <FormLabel>Address</FormLabel>
                  <Input
                    type="text"
                    name="address"
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
              </Box>
           
            <FormControl>
              <FormLabel>date </FormLabel>
              <Input
                type="date"
                name="Date"
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"green"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
                onClick={(e) => handleSubmit(e)}
              >
                Add Details
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

  

    

    
    
          
          </Box>
  );
}

