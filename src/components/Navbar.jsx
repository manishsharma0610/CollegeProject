// import React from 'react'
// import {Link} from "react-router-dom"

// export const Navbar = () => {
//   return (
//     <div style={{width:"100%",display:"flex",justifyContent:"space-between",backgroundColor:"#25446a",color:"black",height:"60px",fontSize:"30px",position: "fixed",top:"0.1px", }}>
//     <div style={{width:"20%",display:"flex",justifyContent:"space-between",marginLeft:"40px" }} >
//      <img style={{width:"65%"}}  src="https://user-images.githubusercontent.com/127972182/233824680-dedee7f5-f92c-4391-a6be-e6378084d401.png"/>
//     <Link to="/">Home</Link>
//     </div>
//     <div style={{width:"35%",display:"flex",justifyContent:"space-around", gap:"50px"}}>
//     <Link to="/data">All customer</Link>
//     <Link to="/bookmark">Bookmarked</Link>
//     <Link to="/sell">Our Products</Link>
//     </div>
    
//     </div>
//   )
// }
import { useState } from "react";
import {
  Box,
  Flex,
  Button,
  HStack,
  IconButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon,AddIcon,EmailIcon} from "@chakra-ui/icons";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const { colorMode, toggleColorMode } = useColorMode();

  const toggleButtonDisplay = () => {
    setIsLargeScreen(window.innerWidth > 768);
  };

  window.addEventListener("resize", toggleButtonDisplay);

  return (
    <Box bg={"blue.100"} px={4} p="-10px" pos="fixed" top="0" left="0" right="0" zIndex="sticky" boxShadow="sm">
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      > 
        <Flex w="300px" justifyContent="space-between">
        <Box w="110px">
          <img  src="https://user-images.githubusercontent.com/127972182/233824680-dedee7f5-f92c-4391-a6be-e6378084d401.png" />
        </Box>
        <Link to="/">
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              // leftIcon={<AddIcon />}
              >
             Home
            </Button>
            </Link>
        </Flex>
        
        <Flex >
        <Box display="flex" mr="30px" mt={{lg:"5px"}}>
        {isLargeScreen ? (
          <HStack spacing={8} alignItems={"start"}>
             <Link to="/data">
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              customer
            </Button>
            </Link>
            <Link to="/bookmark">
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
             Bookmark
            </Button>
            </Link>
            <Link to="/sell">
            <Button
            
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              // leftIcon={<EmailIcon />}
              >
              Products
            </Button>
            </Link>
          </HStack>
        ) : (
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        )}
       </Box>
       <Box>
        <IconButton
          size={"md"}
          aria-label={"Toggle dark mode"}
          icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
        />
         </Box>
         </Flex>
      </Flex>

      {isOpen && !isLargeScreen && (
        <Box pb={4}>
          <HStack spacing={8} alignItems={"start"}>
          <Link to="/data">
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              customer
            </Button>
            </Link>
            <Link to="/bookmark">
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
             Bookmark
            </Button>
            </Link>
            
            <Link to="/sell">
            <Button
            
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<EmailIcon />}>
              Products
            </Button>
            </Link>
          </HStack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;

