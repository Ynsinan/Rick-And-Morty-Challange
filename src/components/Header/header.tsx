import { Box, ButtonGroup, Flex, Heading } from "@chakra-ui/react";
import { ColorModeSwitcher } from "src/ColorModeSwitcher";

type Props = {};

const header = (props: Props) => {
  return (
    <Flex
      p={3}
      minWidth="max-content"
      gap="2"
      justifyContent="space-between"
      color="teal"
    >
      <Box p="2">
        <Heading
          size="md"
          fontSize={["0.5rem", "1rem", "2rem"]}
          data-testid="header"
        >
          Rick And Morty Challange
        </Heading>
      </Box>
      <ButtonGroup gap="2">
        <ColorModeSwitcher />
      </ButtonGroup>
    </Flex>
  );
};

export default header;
