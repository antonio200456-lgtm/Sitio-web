// ColorPicker.jsx
import { Box, HStack, Input, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function ColorPicker({ value, onChange, label }) {
  const [inputValue, setInputValue] = useState(value || "#000000");

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const isValidHex = (val) => {
    return /^#([0-9A-F]{3}){1,2}$/i.test(val);
  };

  const handleInputChange = (e) => {
    let val = e.target.value;

    if (!val.startsWith("#")) {
      val = "#" + val;
    }

    setInputValue(val);

    if (isValidHex(val)) {
      onChange(val);
    }
  };

  return (
    <Box>
      {label && (
        <Text fontWeight="semibold" mb={2}>
          {label}
        </Text>
      )}

      <HStack spacing={3}>
        <HStack
          border="1px solid #ccc"
          borderRadius="6px"
          px={2}
          py={1}
          w="130px"
        >
          <Text color="gray.500">#</Text>
          <Input
            value={inputValue.replace("#", "")}
            onChange={handleInputChange}
            variant="unstyled"
            maxLength={6}
          />
        </HStack>
        <Box position="relative">
          <Box
            w="32px"
            h="32px"
            borderRadius="full"
            bg={isValidHex(inputValue) ? inputValue : "#000"}
            border="2px solid white"
            boxShadow="0 0 0 1px #ccc"
          />

          <Input
            type="color"
            value={isValidHex(inputValue) ? inputValue : "#000000"}
            onChange={(e) => {
              setInputValue(e.target.value);
              onChange(e.target.value);
            }}
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            opacity="0"
            cursor="pointer"
          />
        </Box>
      </HStack>
    </Box>
  );
}