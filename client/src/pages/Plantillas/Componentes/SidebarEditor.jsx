import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Box,
  Text,
  Button,
  VStack,
  HStack,
  Input,
  Select,
  IconButton,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import {
  FiBold,
  FiItalic,
  FiUnderline,
  FiAlignLeft,
  FiAlignCenter,
  FiAlignRight,
} from "react-icons/fi";
import { useState } from "react";
import ColorPicker from "./ColorPicker";

export default function SidebarEditor({
  isOpen,
  onClose,
  selectedSection,
  sections,
  setSections,
  addBlockToSection,
  updateMenuItem,
  deleteMenuItem,
  handleCarouselUpload,
  handleLogoUpload,
  removeLogo,
  updateSectionColor,
  updateTextColor,
  selectedBlock,
  updateBlock,
  updateHoverColor,
}) {
  const [activeTab, setActiveTab] = useState("contenido");

  if (!selectedSection) return null;

  return (

    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          {
            selectedSection?.type === "header"
              ? "Encabezado del sitio"
              : "Sección"
          }
        </DrawerHeader>
        <DrawerBody>
          {selectedSection && (
            <>
              <HStack borderBottom="1px solid #ddd" mb={4}>
                <Box
                  px={4}
                  py={2}
                  cursor="pointer"
                  borderBottom={activeTab === "contenido" ? "2px solid black" : "none"}
                  fontWeight={activeTab === "contenido" ? "bold" : "normal"}
                  onClick={() => setActiveTab("contenido")}
                >
                  Contenido
                </Box>

                <Box
                  px={4}
                  py={2}
                  cursor="pointer"
                  borderBottom={activeTab === "estilos" ? "2px solid black" : "none"}
                  fontWeight={activeTab === "estilos" ? "bold" : "normal"}
                  onClick={() => setActiveTab("estilos")}
                >
                  Estilos
                </Box>
              </HStack>
              {activeTab === "contenido" && (
                <>
                  {selectedSection.type === "section" && (
                    <>
                      <Text fontWeight="bold" mb={2}>
                        Agregar bloque
                      </Text>

                      <VStack align="stretch" spacing={2}>
                        <Button onClick={() => addBlockToSection("text")}>
                          Texto
                        </Button>
                        <Button onClick={() => addBlockToSection("image")}>
                          Imagen
                        </Button>
                        <Button onClick={() => addBlockToSection("button")}>
                          Botón
                        </Button>
                        <Button onClick={() => addBlockToSection("divider")}>
                          Separador
                        </Button>
                        <Button onClick={() => addBlockToSection("spacer")}>
                          Espaciador
                        </Button>
                        <Button onClick={() => addBlockToSection("box")}>
                          Párrafo
                        </Button>
                      </VStack>
                    </>
                  )}

                  {selectedSection.type === "header" && (
                    <>
                      <Box mb={5}>
                        <Text fontWeight="bold" mb={2}>
                          Logo
                        </Text>

                        <Box
                          border="2px dashed #555"
                          borderRadius="md"
                          p={4}
                          textAlign="center"
                          cursor="pointer"
                          transition="0.2s"
                          position="relative"
                          _hover={{
                            borderColor: "#000000",
                            bg: "whiteAlpha.100"
                          }}
                          onClick={() => document.getElementById("logo-upload").click()}
                        >
                          {sections
                            .find((s) => s.type === "header")
                            ?.columns[0].blocks[0].src ? (
                            <>
                              <img
                                src={
                                  sections.find((s => s.type === "header"))
                                    ?.columns[0].blocks[0].src
                                }
                                alt="logo"
                                style={{ maxHeight: "60px", margin: "auto" }}
                              />

                              <HStack
                                position="absolute"
                                top="5px"
                                right="5px"
                                spacing={1}
                              >
                                <Button
                                  size="xs"
                                  bg="blackAlpha.600"
                                  color="white"
                                  _hover={{ bg: "#ff2c8b" }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    document.getElementById("logo-upload").click();
                                  }}
                                >
                                  Cambiar
                                </Button>

                                <Button
                                  size="xs"
                                  bg="blackAlpha.600"
                                  color="white"
                                  _hover={{ bg: "red.500" }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeLogo();
                                  }}
                                >
                                  X
                                </Button>
                              </HStack>
                            </>
                          ) : (
                            <>
                              <Text fontSize="sm" opacity="0.8">
                                + Subir logo
                              </Text>
                              <Text fontSize="xs" opacity="0.5">
                                PNG, JPG
                              </Text>
                            </>
                          )}
                        </Box>

                        <Input
                          id="logo-upload"
                          type="file"
                          accept="image/*"
                          display="none"
                          onChange={(e) => handleLogoUpload(e.target.files[0])}
                        />
                      </Box>
                      <Text fontWeight="bold" mb={3}>
                        Navegación
                      </Text>

                      {sections
                        .find((s) => s.id === selectedSection.id)
                        ?.columns[1].blocks.map((item) => (
                          <HStack key={item.id} mb={2}>
                            <Input
                              value={item.content}
                              onChange={(e) =>
                                updateMenuItem(item.id, e.target.value)
                              }
                            />
                            <Button
                              size="sm"
                              onClick={() => deleteMenuItem(item.id)}
                            >
                              X
                            </Button>
                          </HStack>
                        ))}

                      <Button mt={2} onClick={() => addBlockToSection("menu-item")}>
                        + Agregar item
                      </Button>
                    </>
                  )}
                </>
              )}
              {activeTab === "estilos" && (
                <>
                  <>
                    <ColorPicker
                      label="Color de fondo"
                      value={selectedSection.backgroundColor}
                      onChange={updateSectionColor}
                    />

                    <Box h={4} />

                    <ColorPicker
                      label="Color del texto"
                      value={selectedSection.textColor || "#000000"}
                      onChange={updateTextColor}
                    />
                    <ColorPicker
                      label="Hover menú"
                      value={selectedSection.hoverColor || "#5e5e5e"}
                      onChange={updateHoverColor}
                    />
                  </>
                </>
              )}
            </>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};