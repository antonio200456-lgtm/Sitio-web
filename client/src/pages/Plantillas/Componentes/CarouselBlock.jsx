import { Box, Button, Text, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function CarouselBlock({ block }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!Array.isArray(block.content) || block.content.length === 0) {
    return <Text>No hay imágenes</Text>;
  }

  const next = () => {
    setCurrentIndex((prev) =>
      prev === block.content.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? block.content.length - 1 : prev - 1
    );
  };

  return (
    <Box w="100%" h="70vh"
      textAlign="center"
      position="relative"
      overflow="hidden"
      borderRadius="18px">
      <img
        src={block.content[currentIndex]}
        alt="carousel"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "all 0.4s ease"
        }}
      />
      <Box
        position="absolute"
        inset="0"
        bg="rgba(0,0,0,0.25)"
      />
      <Button
        position="absolute"
        top="50%"
        left="20px"
        transform="translateY(-50%)"
        borderRadius="full"
        bg="rgba(0,0,0,0.45)"
        color="white"
        minW="50px"
        h="50px"
        fontSize="24px"
        zIndex="2"
        _hover={{
          bg: "rgba(0,0,0,0.7)",
          transform: "translateY(-50%) scale(1.08)"
        }}
        onClick={prev}
      >
        <FiChevronLeft />
      </Button>

      <Button
        position="absolute"
        top="50%"
        right="20px"
        transform="translateY(-50%)"
        borderRadius="full"
        bg="rgba(0,0,0,0.45)"
        color="white"
        minW="50px"
        h="50px"
        fontSize="24px"
        zIndex="2"
        _hover={{
          bg: "rgba(0,0,0,0.7)",
          transform: "translateY(-50%) scale(1.08)"
        }}
        onClick={next}
      >
        <FiChevronRight />
      </Button>

      <HStack
        position="absolute"
        bottom="20px"
        left="50%"
        transform="translateX(-50%)"
        spacing={3}
        zIndex="2"
      >
        {block.content.map((_, index) => (
          <Box
            key={index}
            w={currentIndex === index ? "24px" : "10px"}
            h="10px"
            borderRadius="full"
            bg={currentIndex === index ? "white" : "rgba(255,255,255,0.5)"}
            transition="all 0.3s ease"
            cursor="pointer"
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </HStack>
    </Box>
  );
}