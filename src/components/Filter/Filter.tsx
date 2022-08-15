import { Flex, Select } from "@chakra-ui/react";
import { CharacterTypes } from "global";

type Props = {
  data: CharacterTypes[];
};

const Filter = ({ data }: Props) => {
  const genderOptions = data
    .map((item, index) => item.gender)
    .filter((value, index, arr) => arr.indexOf(value) === index);

  const locationOptions = data
    .map((item, index) => item.location.name)
    .filter((value, index, arr) => arr.indexOf(value) === index);
  console.log(locationOptions);

  const statusOptions = data
    .map((item, index) => item.status)
    .filter((value, index, arr) => arr.indexOf(value) === index);

  return (
    <Flex w="70%" m="0 auto" flexDirection={["column", "row"]}>
      <Select
        placeholder="Select Location for Search"
        size="md"
        marginRight={2}
        borderColor="teal"
        variant="filled"
      >
        {locationOptions.map((item, index) => (
          <option key={index}> {item}</option>
        ))}
      </Select>
      <Select
        placeholder="Select Gender for Search"
        size="md"
        marginRight={2}
        borderColor="teal"
        variant="filled"
      >
        {genderOptions.map((item, index) => (
          <option value="option1" key={index}>
            {item}
          </option>
        ))}
      </Select>
      <Select
        placeholder="Select Status for Search"
        size="md"
        borderColor="teal"
        variant="filled"
      >
        {statusOptions.map((item, index) => (
          <option value="option1" key={index}>
            {item}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export default Filter;
