import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {FaFacebook, FaTwitter} from 'react-icons/fa';
import {  ArrowForwardIcon, ArrowRightIcon, EmailIcon, BeatLoader } from "@chakra-ui/icons";

export default function ButtonTest() {
  return (
    <Stack direction="column" spacing={12}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        py={12}
        bgImage="https://bit.ly/2Z4KKcF"
        bgPosition="center"
        bgRepeat="no-repeat"
        mb={2}
      >
        <ButtonGroup gap="4">
          <Button colorScheme="whiteAlpha">Button</Button>
          <Button colorScheme="blackAlpha">Button</Button>
        </ButtonGroup>
      </Box>
      


      <Wrap direction="row">
        <WrapItem>
          <Button colorScheme="gray">Gray</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="red">Red</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="yellow">Yellow</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="green">Green</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="teal">Teal</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="blue">Blue</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="cyan">Cyan</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="purple">Purple</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="pink">Pink</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="linkedin">LinkedIn</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="facebook">Facebook</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="messenger">Messenger</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="whatsapp">Whatsapp</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="twitter">Twitter</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="Telegram">Gray</Button>
        </WrapItem>
      </Wrap>

      <Wrap mt={12} spacing={4}>
        <WrapItem>
          <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
            Email
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="outline"
          >
            Call us
          </Button>
        </WrapItem>
        <WrapItem>
          <Button isLoading colorScheme="teal" variant="solid">
            Settings
          </Button>
        </WrapItem>
        <WrapItem>
          <Button isLoading loadingText="Submitting"  colorScheme="teal" variant="outline">
            Submit 
          </Button>
        </WrapItem>
        <WrapItem>
          <Button isLoading  colorScheme="blue" variant="solid">
            Email
          </Button>
        </WrapItem>
        <WrapItem>
          <Button isLoading loadingText="Loading" colorScheme="blue" variant="solid" spinnerPlacement="start">
            Email
          </Button>
        </WrapItem>
        <WrapItem>
          <Button isLoading loadingText="Loading" colorScheme="blue" variant="solid" spinnerPlacement="end">
            Email
          </Button>
        </WrapItem>
        <WrapItem>
          <Button  colorScheme="facebook" leftIcon={<FaFacebook />} >
            Facebook
          </Button>
        </WrapItem>
        <WrapItem>
          <Button  colorScheme="blue" leftIcon={<FaTwitter />} >
            Twitter
          </Button>
        </WrapItem>
      </Wrap>
      
      <Box
      as='button'
      lineHeight='24px'
      transition='all 0.2s cubic-bezier(.08, .52, .52,1)'
      border='1px'
      px='8px'
      borderRadius='2px'
      fontSize='14px'
      fontWeight='semibold'
      bg='#f5f6f7'
      borderColor='#ccd0d5'
      color='#4b4f56'
      _hover={{bg:'ebedf0'}}
      _active={{
        bg:'#dddfe2',
        transform:'scale(0.8)',
        borderColor:'#bec3c9',
      }}
      _focus={{boxShadow: '0 0 1px 2px rgba(88,144,255,.75),0, 1px,1px, rgba(0,0,0,.15)'}}
      >
        Join Group here 
      </Box>
    </Stack>

    // <Stack spacing={4} direction='row' align='center' justify='center'>
    //     <Button colorScheme='teal' size='xs'>Button</Button>
    //     <Button colorScheme='teal' size='sm'>Button</Button>
    //     <Button colorScheme='teal' size='md'>Button</Button>
    //     <Button colorScheme='teal' size='lg'>Button</Button>
    //     <Button colorScheme='teal' size='lg'>Button</Button>
    //     <Button colorScheme='teal' size='xs'>Button</Button>
    // </Stack>

    // <Button colorScheme='blue' color='white'>Button </Button>
  );
}
