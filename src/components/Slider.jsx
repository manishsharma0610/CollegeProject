import React from "react";
import { useEffect, useState } from "react";
import { Box, Input, Image, Flex} from "@chakra-ui/react";
const Slider = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === craouselData.length - 1) {
        setCounter(-1);
      }
      setCounter((prev) => prev + 1);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div>
      <Box mt="60px">
        <Box position="relative">
          <Image
            boxSize={"650px"}
            objectFit="fill"
            src={craouselData[counter].img}
            alt=""
            width={"100%"}
            className="darken"
          />
        </Box>
      </Box>
    </div>
  );
};

export default Slider;
const craouselData = [
  {
    img: "https://user-images.githubusercontent.com/127972182/234361424-d368efa6-0e29-4d93-ab13-2974ff277b3d.jpg",
  },
  {
    img: "https://user-images.githubusercontent.com/127972182/234357271-7bfe9bad-6d40-4af6-8786-121738c09337.jpg",
  },
  {
    img: "https://user-images.githubusercontent.com/127972182/234363461-97468d33-c169-4be9-a7b6-70f1dc7fd82e.jpg",
  },
  {
    img: "https://user-images.githubusercontent.com/127972182/233823948-c2cf21ad-47b0-4b5f-9418-08f63ad2718e.jpg",
  },
  {
    img: "https://user-images.githubusercontent.com/127972182/233823411-b05844de-9d3a-4415-be15-8a562dec8b1e.jpg",
  },
  {
    img: "https://user-images.githubusercontent.com/127972182/233823726-6e32fcc9-1a57-4873-8666-e4ce32430dc6.jpg",
  },
   {
    img: "https://user-images.githubusercontent.com/127972182/234363794-55b5a642-6df4-4850-a34b-c5deef470916.jpg",
  },
];

