import { useEffect, useState } from "react";
import { dataFetch } from "src/api";

import { Flex, Wrap } from "@chakra-ui/react";
import { CharacterTypes } from "global";
import { Card } from "..";

type Props = {
  page: number;
};

const Cards = ({ page }: Props) => {
  const [data, setData] = useState<CharacterTypes[]>();

  const getData = async (page: number) => {
    try {
      const response = await dataFetch.CharactersGET(page);
      setData(response.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(page);
  }, [page]);

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
