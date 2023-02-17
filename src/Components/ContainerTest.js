import React from "react";
import { Container, VStack, HStack, Box } from "@chakra-ui/react";

function ContainerTest() {
  return (
    <VStack>
      <Container maxW="md" bg="blue.600" color="white">
        md Container
      </Container>
      <Container maxW="lg" bg="purple.600" color="white">
        md Container
      </Container>
      <Container maxW="container.sm" bg="green.600" color="white">
        md Container
      </Container>

      <Container maxW="2xl" bg="blue.600" centerContent>
        <Box p="4" bg="blue.400" color="white" maxW="md" >
          There are many benefits to a joint design and development system. Not
          only does it bring benefits to the design team, but it also brings
          benefits to engineering teams. It makes sure that our experiences have
          a consistent look and feel, not just in our design specs, but in
          production.
        </Box>
      </Container>
    </VStack>

    //         <Container>
    //              There are many benefits to a joint design and development system. Not only
    //   does it bring benefits to the design team, but it also brings benefits to
    //   engineering teams. It makes sure that our experiences have a consistent look
    //   and feel, not just in our design specs, but in production
    //         </Container>
  );
}

export default ContainerTest;
