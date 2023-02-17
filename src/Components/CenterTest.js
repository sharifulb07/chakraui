
import React from "react";
import { Center,HStack,Circle ,Square,Box} from "@chakra-ui/react";
import { PhoneIcon, } from "@chakra-ui/icons";

export default function CenterTest(){
    return(
        <HStack>
            <Center w="40px" h="40px" bg='tomato' color='white'>
                <PhoneIcon />
            </Center>
            <Center w='40px' h='40px' bg='tomato' color='white'>
                <Box as='span' fontWeight='bold' fontSize='lg'>
                    1
                </Box>
            </Center>

            <Center size="40px" color="white">
                <Circle size="40px" bg="purple.400" color='white'>
                    <PhoneIcon />
                </Circle>
            </Center>
       </HStack>




        // <Center bg='tomato' h='100px' color='white'>
        //     This is the Center 
        // </Center>


    )
}