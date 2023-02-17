import React from "react";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import theme from "./theme";
// import AspectRatioTest from "./Components/AspectRatioTest";
// import AccordionTest from "./Components/AccordionTest";
// import AirbnbCard from "./Components/AirbnbCard";

// // import CenterTest from "./Components/CenterTest";
// import ContainerTest from "./Components/ContainerTest";
// import FlexTest from "./Components/FlexTest";
import GridTest from "./Components/GridTest";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="light" />

      <h1>Hello world </h1>

      <GridTest />
      {/* <FlexTest />
<ContainerTest />

<AirbnbCard />
<AccordionTest />

<AspectRatioTest /> */}
    </ChakraProvider>
  );
}

export default App;
