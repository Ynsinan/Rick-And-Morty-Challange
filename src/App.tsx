import { Box, Flex } from "@chakra-ui/react";
import { Header } from "./components";
import MainPage from "./pages/MainPage";

export const App = () => (
  <Box textAlign="center" fontSize="xl" w="100%">
    <Flex w="100%" flexDirection="column">
      <Header />
      <MainPage />
    </Flex>
  </Box>
);
