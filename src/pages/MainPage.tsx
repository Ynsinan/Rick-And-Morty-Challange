import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { CardsWrapper, Filter, PaginationButton } from "src/components";

type Props = {};

const MainPage = (props: Props) => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    console.log(page);
  }, [page]);
  return (
    <Flex flexDirection="column" w="80%" m="0 auto" p={2}>
      <Box marginBottom={5}>
        <Filter />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <CardsWrapper page={page} />
        <PaginationButton setPage={setPage} page={page} />
      </Box>
    </Flex>
  );
};

export default MainPage;
