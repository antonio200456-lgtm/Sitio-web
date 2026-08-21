export const getDefaultStructure = () => [
  {
    id: "header",
    type: "header",
    backgroundColor: "#ffffff",
    textColor: "#000000",
    columns: [
      {
        id: "logo-col",
        blocks: [
          { id: 1, type: "image", src: "", content: "" }
        ]
      },
      {
        id: "menu-col",
        blocks: [
          { id: 2, type: "menu-item", content: "Inicio" },
          { id: 3, type: "menu-item", content: "Planea tu visita" },
          { id: 4, type: "menu-item", content: "Zonas Temáticas" },
          { id: 5, type: "menu-item", content: "Eventos" },
          { id: 6, type: "menu-item", content: "Blog" },
          { id: 7, type: "menu-item", content: "Únete" },
          { id: 8, type: "menu-item", content: "Contacto" },
          { id: 9, type: "menu-item", content: "Apóyanos" }
        ]
      }
    ]
  },
  {
    id: "auto-main",
    type: "section",
    backgroundColor: "#ffffff",
    columns: [
      {
        id: "main-col-1",
        blocks: []
      }
    ]
  },
  {
  id: "footer",
  type: "footer",
  backgroundColor: "#ffffff",
  textColor: "#000000", 
  columns: [
    {
      id: "footer-col",
      blocks: [
        {
          id: "footer-text",
          type: "text",
          content: "© 2026. Todos los derechos reservados."
        }
      ]
    }
  ]
}
];