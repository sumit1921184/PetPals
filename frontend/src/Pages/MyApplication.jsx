import { useEffect, useState } from "react";
import { Center, Spinner, Box, Text, Grid, Button, HStack, Stack, Image } from "@chakra-ui/react";
import "../CSS/Application.css";

function MyApplication() {
    const [dataa, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; 

    useEffect(() => {
        async function fetchData() {
            let jwt = JSON.parse(localStorage.getItem("token"));
            try {
                let res = await fetch("https://petpals-4.onrender.com/application/getApp", {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${jwt}`,
                        'Content-Type': 'application/json'
                    }
                });
                let { application } = await res.json();
                console.log(application, "dataaa");
                setLoading(false);
                setData(application);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dataa.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(dataa.length / itemsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="main-app-cont">
            <main>
                {!dataa.length && !loading ? (
                    <h1 className="not-app">You do not have any applications</h1>
                ) : (
                    <h1 className="h1-app" style={{ textAlign: "center", textDecoration: "none" }}> My Applications</h1>
                )}

                {loading && (
                    <Center p={"150px"}>
                        <Spinner
                            thickness="4px"
                            speed="0.65s"
                            emptyColor="gray.200"
                            color="black.500"
                            size="xl"
                        />
                    </Center>
                )}

                <Grid
                    templateColumns={{ base: "1fr", sm: "1fr 1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                    gap={6}
                    p={4}
                >
                    {Array.isArray(currentItems) && currentItems.map((elem, ind) => (
                        <Box
                            key={ind}
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            boxShadow="lg"
                            p={4}
                            bg="white"
                        >
                            <Box
                                w="100%"
                                h="200px"
                                overflow="hidden"
                                mb={4}
                            >
                                <Image
                                    src={elem.url}
                                    alt={elem.petName}
                                    objectFit="cover"
                                    w="100%"
                                    h="100%"
                                />
                            </Box>
                            <Stack spacing={3}>
                                <Text fontSize="xl" fontWeight="bold">{elem.petName}</Text>
                                <Text>Age: {elem.petAge}</Text>
                                <Text>Color: {elem.color}</Text>
                                <Text>Gender: {elem.petGender}</Text>
                                {elem.status === "Applied" && <Text>Status: <span className="applied">Applied</span></Text>}
                                {elem.status === "Reject" && <Text>Status: <span className="rejected">Rejected</span> ❌</Text>}
                                {elem.status === "Accept" && <Text>Status: <span className="applied">Accepted</span> ✅</Text>}
                            </Stack>
                        </Box>
                    ))}
                </Grid>

                {/* Pagination */}
                <HStack justify="center" mt={8} spacing={4}>
                    <Button
                        onClick={() => paginate(currentPage - 1)}
                        isDisabled={currentPage === 1}
                        variant="outline"
                        colorScheme="blue"
                    >
                        Previous
                    </Button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            variant={currentPage === index + 1 ? "solid" : "outline"}
                            colorScheme="blue"
                        >
                            {index + 1}
                        </Button>
                    ))}
                    <Button
                        onClick={() => paginate(currentPage + 1)}
                        isDisabled={currentPage === totalPages}
                        variant="outline"
                        colorScheme="blue"
                    >
                        Next
                    </Button>
                </HStack>
            </main>
        </div>
    );
}

export default MyApplication;
