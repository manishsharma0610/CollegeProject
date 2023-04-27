import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


// localstorage se data get kr ra hu ya le rha hu
const bookmark = JSON.parse(localStorage.getItem("bookmark")) || [];
export const Data = () => {
  
  const navigate=useNavigate()
  const notess = JSON.parse(localStorage.getItem("notes")) || [];
  const [notes, setNotes] = useState([]);
  console.log(notes);
  useEffect(() => {
    setNotes(notess);
  }, [notess.length]);


  // us card ya box ke data ko delete krne ke liye function
  const handleDelete = (id) => {
    let x = notes.filter((el, i) => {
      return i != id;
    });
    alert("Customer Detail deleted");
    localStorage.setItem("notes", JSON.stringify(x));
    setNotes(x);
  };


  // buttun pe click krne ke bad hamara us card data oo store ho jayega localstorage me 
  const handleBookmark = (el) => {
    bookmark.push(el);
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
    alert("Garbage Collect");
    navigate("/bookmark")
  };
  return (
    <div style={{marginTop:"90px"}}
    >
    <Box>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
        backgroundImage:"url('')"
        
      }}
    >
      {notes?.map((el, i) => {
        return (
          <Card maxW="sm" key={i}>
            <CardBody
            bgColor="skyblue">
              <Image
                src={el.image}
                alt="image"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Text justifyContent="left" color="blue.600" fontSize="3xl">
                  Name : {el.name}
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  Number: {el.contact}
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  Email : {el.email}
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  Address : {el.address}
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  Date : {el.Date}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter
            bgColor="yellow">
              <ButtonGroup spacing="10">
                <Button
                  variant="solid"
                  colorScheme="blue"
                  backgroundColor="red"
                  onClick={() => handleDelete(i)}
                >
                  Delete
                </Button>
                <Button
                  variant="ghost"
                  color='white'
                  bg="green"
                  onClick={() => handleBookmark(el)}
                >
                  Collected
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          
        );
      })}
    </div>
     <Box backgroundImage="url('https://new.resurgentindia.org/wp-content/uploads/2014/10/Sample31.jpg')"></Box>
     </Box>
     </div>
  );
};
