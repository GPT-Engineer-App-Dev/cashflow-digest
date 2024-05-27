import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" color="white">Home</Link>
          <Link as={RouterLink} to="/world" color="white">World</Link>
          <Link as={RouterLink} to="/business" color="white">Business</Link>
          <Link as={RouterLink} to="/tech" color="white">Tech</Link>
          <Link as={RouterLink} to="/markets" color="white">Markets</Link>
          <Link as={RouterLink} to="/opinion" color="white">Opinion</Link>
        </HStack>
      </Flex>

      {/* Main Content Area */}
      <Box as="main" p={4}>
        <VStack spacing={8} align="stretch">
          {/* Headlines Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>Headlines</Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="md">Headline 1</Heading>
                <Text mt={2}>Summary of the first headline...</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="md">Headline 2</Heading>
                <Text mt={2}>Summary of the second headline...</Text>
              </Box>
            </VStack>
          </Box>

          {/* Articles Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>Articles</Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="md">Article 1</Heading>
                <Text mt={2}>Summary of the first article...</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="md">Article 2</Heading>
                <Text mt={2}>Summary of the second article...</Text>
              </Box>
            </VStack>
          </Box>

          {/* Images Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>Images</Heading>
            <HStack spacing={4}>
              <Image boxSize="200px" objectFit="cover" src="https://via.placeholder.com/200" alt="Placeholder Image 1" />
              <Image boxSize="200px" objectFit="cover" src="https://via.placeholder.com/200" alt="Placeholder Image 2" />
            </HStack>
          </Box>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link as={RouterLink} to="/privacy" color="white">Privacy Policy</Link>
            <Link as={RouterLink} to="/terms" color="white">Terms of Service</Link>
            <Link as={RouterLink} to="/contact" color="white">Contact Us</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;