import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { CharacterTypes } from "global";

interface CardProps {
  characterData: CharacterTypes;
}

const Card = ({ characterData }: CardProps) => {
  return (
    <Center py={12}>
      <Box
        h={["auto"]}
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `${characterData.image}`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={characterData.image}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Box display="flex">
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
              borderRight={"1px solid"}
              paddingRight={"2px"}
              textDecoration={
                characterData.status === "Dead" ? "line-through" : ""
              }
            >
              {characterData.status}
            </Text>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
              paddingLeft={"2px"}
            >
              {characterData.species}
            </Text>
          </Box>

          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {characterData.name}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              Origin : {characterData.origin.name}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};
export default Card;
