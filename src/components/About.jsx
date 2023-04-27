import React from 'react'
import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Button,
} from '@chakra-ui/react';

export const Sell = () => {

  const handle=()=>{
alert("we can delivered you product in few hour")
  }
  const ProjectData = [
    {
      title: "",
      image:
        "https://user-images.githubusercontent.com/127972182/233789495-0410065c-dabf-4fa2-ae34-1cf8a3190974.jpg" ,price:"200"},
        
    {
      title: "paper waste",
      image:
        "https://user-images.githubusercontent.com/127972182/233784487-8392e209-c231-4783-bcf6-eccf3c7abf65.jpg",
    },
    {
      title: "electronics waste",
      image:
        "https://user-images.githubusercontent.com/127972182/233784566-a20e2c0c-69e4-4c94-b940-60aa2dcc6fb0.jpg",
    },
    {
      title: "glass waste",
      image:
        "https://user-images.githubusercontent.com/127972182/233784644-73225fa0-1eee-4126-afe9-235755323191.jpg",
    },{
        title:"metal waste",
        image:"https://user-images.githubusercontent.com/127972182/233784755-ab432f84-5d4a-427e-aa55-97756cbaf7f7.jpg"
    }, {
        title: "Shoulder Pain",
        image:
          "https://user-images.githubusercontent.com/127972182/233784913-16d1b710-af79-4c53-abf5-97699d6a3f17.jpg",
      }, {
        title: "Organic waste",
        price:"300",
        image:
          "https://user-images.githubusercontent.com/127972182/233785072-7cc495a9-4256-475c-836c-2ca3ed716b61.jpg",
      }, {
        title: "",
        image:
          "https://user-images.githubusercontent.com/127972182/233785148-0f1eff35-fe9a-4c3c-9005-75435600abf1.jpg",
      }
   
  ];
  return (
    <Box mb={10} id="projects" mt="80px">
      <Heading color={"blue.500"}>PRODUCTS</Heading>
      <SimpleGrid columns={[1, 1, 2, 4]} spacing={4} mt={8}>
        {ProjectData.map((t) => {
          return (
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              border="1px solid"
              borderColor={"gray.300"}
              rounded={"xl"}
              mx={8}
              p={2}
            >
              <Image src={t.image} />
              <Text fontSize={"1.3rem"} fontWeight="700">{t.title}</Text>
        
                <Heading fontSize="28px">Price : ${t.price}</Heading>
                <Button w="120px" onClick={handle}> Buy</Button>
              
            </Stack>
          );
        })}
      </SimpleGrid>
    </Box>
  )
}

