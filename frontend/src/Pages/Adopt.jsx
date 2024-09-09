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
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Select,
  IconButton,
} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Adopt = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterColor, setFilterColor] = useState("");
  const [selectedPet, setSelectedPet] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast()
  const navigate = useNavigate()
  const petsPerPage = 8;

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    AadharId: "",
    address: "",
    reason: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    fetchPets();
  }, [page, filterType, filterColor]);

  const fetchPets = async () => {
    try {
      const res = await fetch(`https://petpals-4.onrender.com/pet`);
      const { pets } = await res.json();
      setLoading(false);
      setData(pets);
    } catch (err) {
      setLoading(false);
      setError(true);
      console.error("Error fetching pets:", err);
    }
  };

  const filteredPets = data.filter((pet) => {
    if (filterType && filterType !== "" && pet.type !== filterType)
      return false;
    if (filterColor && filterColor !== "" && pet.color !== filterColor)
      return false;
    if (
      searchInput &&
      !pet.name.toLowerCase().includes(searchInput.toLowerCase())
    )
      return false;
    return true;
  });

  const indexOfLastPet = page * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = filteredPets.slice(indexOfFirstPet, indexOfLastPet);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    setPage(1);
  };

  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
    setPage(1);
  };

  const handleFilterColorChange = (event) => {
    setFilterColor(event.target.value);
    setPage(1);
  };

  const handlePagination = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleFormSubmit = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const { name, contact, AadharId, address, reason } = formData;
    try {
      const petId = selectedPet._id;
      const response = await fetch(
        `https://petpals-4.onrender.com/application/${petId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify({
            name,
            contact,
            AadharId,
            address,
            reason,
          }),
        }
      );
      const responseData = await response.json();
      if (response.ok) {
        toast({
          title: responseData.msg,
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      }
      else {
        toast({
          title: "Error while sending the data",
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      }
      onClose();
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application. Please try again later.");
    }
  };

  return (
    <>
      <Flex
        justify="center"
        align="center"
        gap="20px"
        wrap="wrap"
        mt="30px"
        mb="20px"
      >
        <Input
          type="text"
          placeholder="Search by name"
          value={searchInput}
          onChange={handleSearchInputChange}
          bg="#f5f5f5"
          borderRadius="10px"
          padding="10px"
          w="300px"
          border="1px solid #ccc"
        />

        <Select
          placeholder="All Types"
          value={filterType}
          onChange={handleFilterTypeChange}
          bg="#f5f5f5"
          borderRadius="10px"
          padding="10px"
          border="1px solid #ccc"
          w="200px"
        >
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </Select>

        <Select
          placeholder="All Colors"
          value={filterColor}
          onChange={handleFilterColorChange}
          bg="#f5f5f5"
          borderRadius="10px"
          padding="10px"
          border="1px solid #ccc"
          w="200px"
        >
          <option value="brown">Brown</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="gray">Gray</option>
          <option value="cream">Cream</option>
          <option value="red">Red</option>
        </Select>
      </Flex>

      {loading && (
        <Center p="150px">
          <Spinner
            thickness="4px"
            speed="0.65s"
            color="orange.500"
            size="xl"
          />
        </Center>
      )}


      <Grid
        textAlign="left"
        color="#171616"
        w="85%"
        m="auto"
        gap="40px"
        justifyContent="center"
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        pb="70px"
      >
        {currentPets.map((pet) => (
          <Box
            key={pet._id}
            boxShadow="lg"
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.05)" }}
            p="20px"
            borderRadius="10px"
            bg="white"
          >
            <Box overflow="hidden" borderRadius="10px">
              <Image
                src={pet.url}
                width="100%"
                height="300px"
                objectFit="cover"
                borderRadius="10px"
              />
            </Box>
            <Heading as="h3" fontSize="24px" mt="10px" textAlign="center">
              {pet.name}
            </Heading>
            <Text><strong>Type:</strong> {pet.type}</Text>
            <Text><strong>Gender:</strong> {pet.gender}</Text>
            <Text><strong>Color:</strong> {pet.color}</Text>
            <Text><strong>Age:</strong> {pet.age}</Text>
            <Text><strong>Description:</strong> {pet.description}</Text>

            <Button
              mt="10px"
              colorScheme="orange"
              w="100%"
              onClick={() => {
                let token = localStorage.getItem("token");
                if (!token) {
                  navigate("/login");
                }
                setSelectedPet(pet);
                onOpen();
              }}
            >
              Adopt Me
            </Button>
          </Box>
        ))}
      </Grid>

      <Flex justify="center" mb="40px">
        <ButtonGroup variant="solid" spacing="5">
          <IconButton
            icon={<ChevronLeftIcon />}
            onClick={() => handlePagination(page - 1)}
            isDisabled={page === 1}
            aria-label="Previous"
          />
          <Text fontSize="xl">{page}</Text>
          <IconButton
            icon={<ChevronRightIcon />}
            onClick={() => handlePagination(page + 1)}
            isDisabled={currentPets.length < petsPerPage}
            aria-label="Next"
          />
        </ButtonGroup>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Application Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Contact Number</FormLabel>
              <Input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Aadhar ID</FormLabel>
              <Input
                type="text"
                name="AadharId"
                value={formData.AadharId}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Reason for Adopting</FormLabel>
              <Input
                type="text"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="orange" onClick={handleFormSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Adopt;
