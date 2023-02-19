import React from "react";
import { Stack, Checkbox } from "@chakra-ui/react";

export default function CheckboxTest() {
  return (
    <Stack spacing={5} direction="row">
      <Checkbox borderColor='white' colorScheme="red" defaultChecked>
        Color
      </Checkbox>
      <Checkbox  borderColor='white' colorScheme="green">Fonts</Checkbox>
    </Stack>
  );
}
