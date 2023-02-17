import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";

const GridTest = () => {
  return (
    <Grid
    h='200px'
    templateRows='repeat(3,1fr)'
    templateColumns='repeat(5,1fr)'
    gap={4}
    >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg='papayawhip' />
        <GridItem colSpan={2} bg='papayawhip' />
        <GridItem colSpan={4} bg='papayawhip' />
        <GridItem colSpan={5} bg='papayawhip' />
       

    </Grid>

    /* //</Grid
    // h="100%"
    // templateColumns='repeat(2,1fr)'
    // templateRows='repeat(5,1fr)'
    // gap={4}
    // >
    // <GridItem  rowSpan={5} colSpan={1}  bg="red.500" />
    // <GridItem colSpan={2} bg="purple.500" />
    // <GridItem colSpan={2} bg="purple.500" />
    // <GridItem colSpan={4} bg="purple.500" /> */

    
    /*
    // <Grid templateRows="repeat(5,1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
    //   <GridItem rowSpan={2} colSpan={1} bg="red" />
    //   <GridItem colSpan={2} bg="papayawhip" />
    //   <GridItem colSpan={2} bg="papayawhip" />
    //   <GridItem colSpan={4} bg="blue.500" /> 891278412

    //   {/* <GridItem w='100%' _hover={{bg:"orange.500"}} borderRadius="5px" h='10' bg='blue.500' />
    //         <GridItem w='100%' h='10' bg='blue.500' />
    //         <GridItem w='100%' h='10' bg='blue.500' />
    //         <GridItem w='100%' h='10' bg='blue.500' />
    //         <GridItem w='100%' h='10' bg='blue.500' />
    //         <GridItem w='100%' h='10' bg='blue.500' />
    //         <GridItem w='100%' h='10' bg='blue.500' /> */
    // </Grid> */
  );
};

export default GridTest;
