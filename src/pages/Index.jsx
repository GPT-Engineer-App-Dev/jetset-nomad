import { Container, VStack, Heading, Text, Button, Box, Image } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to TravelEase
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your one-stop solution for booking flights, hotels, and car rentals.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/travel.jpg" alt="Travel" borderRadius="md" />
        </Box>
        <VStack spacing={4} width="100%">
          <Button leftIcon={<FaPlane />} colorScheme="teal" size="lg" width="100%">
            Book a Flight
          </Button>
          <Button leftIcon={<FaHotel />} colorScheme="teal" size="lg" width="100%">
            Book a Hotel
          </Button>
          <Button leftIcon={<FaCar />} colorScheme="teal" size="lg" width="100%">
            Rent a Car
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;