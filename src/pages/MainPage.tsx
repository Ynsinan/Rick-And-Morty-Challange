import { Box, Flex } from "@chakra-ui/react";
import { CharacterTypes } from "global";
import { useEffect } from "react";
import { useState } from "react";
import { dataFetch } from "src/api";
import { CardsWrapper, Filter, PaginationButton } from "src/components";

type Props = {};

const MainPage = (props: Props) => {
  const [page, setPage] = useState(1);
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
    <Flex flexDirection="column" w="80%" m="0 auto" p={2}>
      <Box marginBottom={5}>
        {data ? <Filter data={data} /> : <p>Loading...</p>}
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {data ? <CardsWrapper data={data} /> : <p>Loading...</p>}
        <PaginationButton setPage={setPage} page={page} />
      </Box>
    </Flex>
  );
};

export default MainPage;
