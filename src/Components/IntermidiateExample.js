import React from "react";
import { Stack, Checkbox } from "@chakra-ui/react";
import { useState } from "react";

import CustomIcon from "./CustomIcon";

export default function IntermidiateExample() {
  const [checkItems, setCheckItems] = useState([false, false]);
  const allChecked = checkItems.every(Boolean);
  const isIntermidiate = checkItems.some(Boolean) && !allChecked;

  return (
    <Stack spacing={4} direction="row">
      <Checkbox icon={<CustomIcon />} colorScheme="cyan">
        Hello World
      </Checkbox>

      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIntermidiate}
        onChange={(e) => setCheckItems([e.target.checked, e.target.checked])}
      >
        Parent Checkbox
      </Checkbox>

      <Checkbox
        isChecked={checkItems[0]}
        onChange={(e) => setCheckItems([e.target.checked, checkItems[1]])}
      >
        Child Number One
      </Checkbox>
      <Checkbox
        isChecked={checkItems[1]}
        onChange={(e) => setCheckItems([checkItems[0], e.target.checked])}
      >
        Child Number two
      </Checkbox>
    </Stack>
  );
}
