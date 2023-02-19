import React from "react";
import { SimpleGrid,Box } from "@chakra-ui/react";

export default function SimpleGridTest(){

    return(
        <SimpleGrid columns={2} spacingX="40px" spacingY="20px">

        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>



        </SimpleGrid>

        // auto responsive for SimpleGrid here 

// <SimpleGrid minChildWidth="300px" spacing="40px">
// <Box bg="purple.200" h="80px"></Box>
// <Box bg="purple.200" h="80px"></Box>
// <Box bg="purple.200" h="80px"></Box>
// <Box bg="purple.200" h="80px"></Box>
// <Box bg="purple.200" h="80px"></Box>
// <Box bg="purple.200" h="80px"></Box>
// <Box bg="purple.200" h="80px"></Box>
// <Box bg="purple.200" h="80px"></Box>
// <Box bg="purple.200" h="80px"></Box>
// <Box bg="purple.200" h="80px"></Box>
// <Box bg="purple.200" h="80px"></Box>
// <Box bg="purple.200" h="80px"></Box>
// <Box bg="purple.200" h="80px"></Box>

// </SimpleGrid>




        // <SimpleGrid columns={[1,null,3]}  spacing={10}>
        //     <Box bg="tomato" h="80px"></Box>
        //     <Box bg="tomato" h="80px"></Box>
        //     <Box bg="tomato" h="80px"></Box>
        //     <Box bg="tomato" h="80px"></Box>
        //     <Box bg="tomato" h="80px"></Box>
        //     <Box bg="tomato" h="80px"></Box>
        //     <Box bg="tomato" h="80px"></Box>
        //     <Box bg="tomato" h="80px"></Box>
        //     <Box bg="tomato" h="80px"></Box>
        //     <Box bg="tomato" h="80px"></Box>
        // </SimpleGrid>
    )
}