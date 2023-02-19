import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

export default function WrapTest() {
  return (
    <Wrap spacing="80px" justify='left'>
      <WrapItem>
        <Center w="100px" h="80px" bg="red.200">
          Box 1
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="100px" h="80px" bg="green.200">
          Box 2
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="100px" h="80px" bg="tomato">
          Box 3
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="100px" h="80px" bg="blue">
          Box 4
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="100px" h="80px" bg="blackAlpha.500" color="white">
          Box 5
        </Center>
      </WrapItem>
    </Wrap>
  );
}
