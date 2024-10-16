import { Box ,Image,Text} from '@chakra-ui/react'
import React from 'react'
import btcSrc from "../assets/bitcoin.gif"

import {motion} from "framer-motion";

const Home = () => {
  return <Box bg={"blackAlpha.900"}
  w={"full"}
  h={"85vh"}>
        <motion.div
        style={{
          height: "70vh",
        }}
        animate={{
         
          translateY: "25px",
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          
        />
      </motion.div>




  <Text fontSize={"6xl"} textAlign={"center"} fontWeight={"thin"}
  color={"whiteAlpha.700"}
  mt={"-30"}>Xcrypto</Text>

  </Box>
}

export default Home