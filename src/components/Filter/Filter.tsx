import { Flex, Select } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Filter = (props: Props) => {
  return (
    <Flex w="70%" m="0 auto" flexDirection={["column", "row"]}>
      <Select placeholder="Select option" size="md">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Select placeholder="Select option" size="md">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Select placeholder="Select option" size="md">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </Flex>
  );
};

export default Filter;
