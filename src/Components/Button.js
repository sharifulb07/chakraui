import { Button,Box } from "@chakra-ui/react";
import React, { Fragment } from "react";

function ButtonClick(){
    return(
        <Fragment>
            <Button colorScheme='teal'
            _hover={{background:"white", color:"teal.500"}}>Hover Me</Button>
            <Box role="group"><Box _hover={{fontWeight:'semibold'}} _groupHover={{color:'tomato'}}></Box></Box>
            <Box    
            _before={{content:'"🙂"', display:'inline-block', mr:'5px'}}>
                A pseudo element 
            </Box>
        <Button as='a' target='_blank' variant='outline' href="https://chakra-ui.com">
            Hello
        </Button>
        {/* <Box w='100%' h='200px' bgGradient="linear(to-r, green.200, pink.500)" /> */}
        </Fragment>
    )
}

export default ButtonClick;