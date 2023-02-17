import { Flex, Box } from "@chakra-ui/react";
import React from "react";

function BackdropFilters() {
  const outerBoxStyles = {
    boxSize: "250px",
    p: "10",
    background:
      "url(https://picsum.photos/id/1068/200/300) center/cover no-repeat",
  };

  const innerBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxSize: "full",
    color: "white",
    textShadow: "0 0 20px black",
    fontWeight: "bold",
    fontSize: "20px",
  };

  return (
    <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly">
      <Box sx={outerBoxStyles}>
        <Box sx={innerBoxStyles} backdropFilter="invert(100%)">
          Box with Backdrop Filter
        </Box>
      </Box>

      <Box sx={outerBoxStyles}>
        <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="8px">
          Box with Backdrop Blur
        </Box>
      </Box>

      <Box sx={outerBoxStyles}>
        <Box sx={innerBoxStyles} backdropFilter="auto" backdropContrast="30%">
          Box with Backdrop Contrast
        </Box>
      </Box>
    </Flex>
  );
}

export default BackdropFilters;
