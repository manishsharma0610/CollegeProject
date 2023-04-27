import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Center,
    Divider,
    Heading,
    Image,
    position,
    Stack,
    Text,
    withDefaultSize,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { useEffect } from "react";
  
  
  export const Bookmark = () => {
    const bookmark=JSON.parse(localStorage.getItem("bookmark"))||[]
    const [bookmarks, setBookmarks] = useState([]);
    
    useEffect(() => {
        setBookmarks(bookmark);
      }, [bookmark.length]);
    
    return (
      <div 
      style={{marginTop:"90px"}}
     >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
        }}
      >
        {bookmarks?.map((el, i) => {
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
          </Card>
          );
        })}
      </div>
      </div>
    );
  };
  