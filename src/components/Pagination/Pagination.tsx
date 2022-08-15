import { Button, Stack } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
type Props = {
  setPage: (page: number) => void;
  page: number;
};

const Pagination = ({ setPage, page }: Props) => {
  return (
    <Stack direction="row" spacing={4} justifyContent="flex-end">
      <Button
        leftIcon={<ArrowBackIcon />}
        colorScheme="teal"
        variant="outline"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Prev Page
      </Button>
      <Button
        rightIcon={<ArrowForwardIcon />}
        colorScheme="teal"
        variant="outline"
        onClick={() => setPage(page + 1)}
      >
        Next Page
      </Button>
    </Stack>
  );
};

export default Pagination;
