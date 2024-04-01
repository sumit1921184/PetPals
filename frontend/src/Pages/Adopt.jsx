import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Button,
  ButtonGroup,
  Text,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { toast } from "react-toastify";

const Adopt = () => {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchrender();
  }, [page]);

  const handclick = (val) => {
    setPage(page + val);
  };

  const fetchrender = async () => {
    try {
      const res = await fetch(`https://petpals-4.onrender.com/pet/`);
      const data = await res.json();
      setLoading(false);
      console.log(data.pets);
      setData(data.pets);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  if (Loading) {
    return (
      <Center p={"150px"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="black.500"
          size="xl"
        />
      </Center>
    );
  } else if (error) {
    return toast({
      title: `Try Again`,
      status: "error",
      isClosable: true,
    });
  }

  return (
    <>
      <div style={{ paddingTop: "70px", paddingBottom: "70px" }}>
        <Grid
          textAlign={"left"}
          color={"#171616"}
          border="2px solid red"
          w="90%"
          m="auto"
          h={{ base: "8950px", md: "4200px", xl: "2200px" }}
          gap={{ base: "2%", md: "3%", xl: "4%" }}
          //  pt={"100px"}
          justifyContent={"center"}
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(4,1fr)",
          }}
        >
          {data.map((ele, i) => (
            <Box
              boxShadow="yellow 0px 8px 24px"
              display={"flex"}
              p={"20px"}
              flexDir={"column"}
              _hover={{
                transform: "scale(1.02)",
                transition: "transform 0.4s",
              }}
              // h={"350px"}
              key={i}
            >
              <Image src={ele.url} w="200px" h="180px" m={"auto"} />
              <Flex justifyContent={"space-around"} alignItems={"center"}>
                <Flex direction="column" gap="2%">
                  <Heading
                    as="h6"
                    fontSize="20px"
                    textAlign="center"
                    mt="7px"
                    mb="5px"
                  >
                    {ele.name}
                  </Heading>
                  <Flex display="flex" justifyContent="space-between">
                    <Text fontSize={"16px"} color="black">
                      {" "}
                      Type: {ele.type}
                    </Text>

                    <Text fontSize={"16px"} color="black">
                      {" "}
                      Age: {ele.age}
                    </Text>
                  </Flex>
                  <Text fontSize={"16px"} color="black">
                    {" "}
                    Gender: {ele.gender}
                  </Text>
                  <Text fontSize={"16px"} color="black">
                    {" "}
                    Description: {ele.description}
                  </Text>
                </Flex>
              </Flex>
              <Button m="auto" bgColor="orange">
                Adopt Me
              </Button>
            </Box>
          ))}
        </Grid>
      </div>
      <Flex m="auto" width="28%" mb="20px">
        <ButtonGroup variant="outline" spacing="7">
          <Button
            bgColor="red"
            onClick={() => handclick(-1)}
            isDisabled={page === 1}
          >
            Previous
          </Button>
          <p>{page}</p>
          <Button bgColor="green" onClick={() => handclick(1)}>
            Next
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default Adopt;
