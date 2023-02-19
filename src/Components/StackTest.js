import React from "react";
import {
  Stack,
  HStack,
  Vstack,
  Box,
  Heading,
  Text,
  StackDivider,
  VStack,
} from "@chakra-ui/react";

function Feature({ title, desc, ...rest }) {
  return (
    <Box p={4} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>

      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

export default function StackEx() {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      <Box h="40px" bg="yellow.200" textAlign="center" color="blackAlpha.900">
        <Text pt={2}>1</Text>
      </Box>
      <Box h="40px" bg="red.200" textAlign="center" color="blackAlpha.900">
      <Text pt={2}>2</Text>
      </Box>
      <Box h="40px" bg="pink.200" textAlign="center" color="blackAlpha.900">
      <Text pt={2}>3</Text>
      </Box>
    </VStack>

    // <HStack spacing={8}>
    //   <Feature w='50%'
    //     title="Plan Money"
    //     desc="The future can be even brighter but a goal without a plan is just a wish"
    //   />

    //   <Feature w='50%'
    //     title="Save Money"
    //     desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
    //   />
    // </HStack>

    // <Stack mb={4} spacing={8} direction='row'>
    //     <Feature
    //     title='Plan Money'
    //     desk='The future can be even brighter but a goal without a plan is just a wish'
    //     />

    //     <Feature
    //     title="Plan Money"
    //     desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
    //     />
    // </Stack>
  );
}
