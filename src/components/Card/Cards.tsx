import { Flex, Wrap } from "@chakra-ui/react";
import { CharacterTypes } from "global";
import { Card } from "..";

type Props = {
  data: CharacterTypes[];
};

const Cards = ({ data }: Props) => {
  return (
    <Flex w="100%">
      <Wrap spacing="30px" justify="center">
        {data?.map((item, index) => (
          <Card key={index} characterData={item} />
        ))}
      </Wrap>
    </Flex>
  );
};

export default Cards;
