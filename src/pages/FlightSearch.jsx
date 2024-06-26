import { useState } from "react";
import { Container, VStack, Heading, Input, Button, Select, Box, Text } from "@chakra-ui/react";

const FlightSearch = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [flights, setFlights] = useState([]);

  const handleSearch = () => {
    // Mock flight data
    const mockFlights = [
      { id: 1, airline: "Airline A", departure, arrival, departureDate, returnDate, price: "$200" },
      { id: 2, airline: "Airline B", departure, arrival, departureDate, returnDate, price: "$250" },
    ];
    setFlights(mockFlights);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h2" size="xl">Search Flights</Heading>
        <Input placeholder="Departure Location" value={departure} onChange={(e) => setDeparture(e.target.value)} />
        <Input placeholder="Arrival Location" value={arrival} onChange={(e) => setArrival(e.target.value)} />
        <Input type="date" placeholder="Departure Date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
        <Input type="date" placeholder="Return Date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        <Select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>{num + 1} Passenger{num > 0 ? "s" : ""}</option>
          ))}
        </Select>
        <Button colorScheme="teal" onClick={handleSearch}>Search</Button>
      </VStack>
      <Box mt={8} width="100%">
        {flights.length > 0 ? (
          flights.map((flight) => (
            <Box key={flight.id} p={4} borderWidth="1px" borderRadius="md" mb={4}>
              <Text>Airline: {flight.airline}</Text>
              <Text>Departure: {flight.departure}</Text>
              <Text>Arrival: {flight.arrival}</Text>
              <Text>Departure Date: {flight.departureDate}</Text>
              <Text>Return Date: {flight.returnDate}</Text>
              <Text>Price: {flight.price}</Text>
            </Box>
          ))
        ) : (
          <Text>No flights found</Text>
        )}
      </Box>
    </Container>
  );
};

export default FlightSearch;