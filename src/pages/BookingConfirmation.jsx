import { Container, VStack, Heading, Text, Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const { bookingDetails } = location.state || {};

  if (!bookingDetails) {
    return (
      <Container centerContent maxW="container.md" py={8}>
        <Heading as="h2" size="xl">No Booking Details</Heading>
        <Text>Please go back and complete your booking.</Text>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h2" size="xl">Booking Confirmation</Heading>
        <Box p={4} borderWidth="1px" borderRadius="md" width="100%">
          <Text>Airline: {bookingDetails.airline}</Text>
          <Text>Departure: {bookingDetails.departure}</Text>
          <Text>Arrival: {bookingDetails.arrival}</Text>
          <Text>Departure Date: {bookingDetails.departureDate}</Text>
          <Text>Return Date: {bookingDetails.returnDate}</Text>
          <Text>Price: {bookingDetails.price}</Text>
        </Box>
        <Text fontSize="lg" color="teal.500">Thank you for booking with TravelEase!</Text>
      </VStack>
    </Container>
  );
};

export default BookingConfirmation;