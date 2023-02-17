import { Flex,Box } from "@chakra-ui/react";
import React from "react";
function Filters(){
    
    const basicBoxStyles={
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        boxSize:'250px',
        color:'white',
        textShadow:'0 0 2px black',
        fontWeight:'bold',
        fontSize:'20px',
        px:4,
        background:'url(https://picsum.photos/id/1080/200/300) center/cover no-repeat',

    }

    return(
        <Flex flexWrap='wrap' gap='24px' justifyContent='space-evenly'>

            <Box sx={basicBoxStyles} filter='grayscale(80%)'>
                Box with Filter 
            </Box>
            <Box sx={basicBoxStyles} filter='auto' blur='1px'>
                Box with Blur 
            </Box>

            <Box sx={basicBoxStyles} filter='auto' brightness='40%'>
                Box with Brightness 
            </Box>

        </Flex>

    )
}

export default Filters;