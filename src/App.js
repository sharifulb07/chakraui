import React from "react";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import theme from "./theme";
// import AspectRatioTest from "./Components/AspectRatioTest";
// import AccordionTest from "./Components/AccordionTest";
// import AirbnbCard from "./Components/AirbnbCard";

// // import CenterTest from "./Components/CenterTest";
// import ContainerTest from "./Components/ContainerTest";
// import FlexTest from "./Components/FlexTest";
// import GridTest from "./Components/GridTest";

// import SimpleGridTest from "./Components/SimpleGridTest";
// import StackEx from "./Components/StackTest";
// import WrapTest from "./Components/WrapTest";
// import CheckboxTest from "./Components/CheckboxTest";

// import ButtonTest from "./Components/ButtonTest";
import IntermidiateExample from "./Components/IntermidiateExample";
import CheckboxGroupTest from "./Components/CheckboxGroupTest";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="light" />

      <h1>Hello world </h1>
      <CheckboxGroupTest />
{/* <CheckboxTest /> */}
<IntermidiateExample />
      {/* <ButtonTest /> */}
      {/* <WrapTest /> */}
      {/* <StackEx />
<SimpleGridTest /> */}

      {/* <GridTest /> */}
      {/* <FlexTest />
<ContainerTest />

<AirbnbCard />
<AccordionTest />

<AspectRatioTest /> */}
    </ChakraProvider>
  );
}

export default App;
