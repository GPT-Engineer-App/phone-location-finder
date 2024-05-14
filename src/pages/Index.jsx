import { Container, Text, VStack, Input, Button, Box, IconButton, HStack } from "@chakra-ui/react";
import { FaSearchLocation } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState(null);

  const handleSearch = () => {
    // Simulate a location search
    setLocation("New York, NY"); // Replace with actual location fetching logic
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Find Phone Location</Text>
        <HStack width="100%">
          <Input placeholder="Enter phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <IconButton aria-label="Search location" icon={<FaSearchLocation />} onClick={handleSearch} />
        </HStack>
        {location && (
          <Box p={4} borderWidth={1} borderRadius="md" width="100%" textAlign="center">
            <Text>Location: {location}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
