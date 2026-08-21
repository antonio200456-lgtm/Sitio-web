// data/templates.js (o dentro de tu componente)
export const eventTemplates = [
  {
    id: 1,
    titulo: "Villa Navideña",
    fecha: "20 de Diciembre 2025",
    lugar: "Trapiche, Sinaloa",
    aboutTitulo: "",   
  aboutImagen: "",
    descripcion: "Ideal para eventos festivos y celebraciones de fin de año.",
    portada: "https://blob.luznoticias.mx/images/2024/11/27/svsadf.jpeg",
    contactoTitulo: "",
  contactoDescripcion: "",
  contactoTelefono: "",
  contactoEmail: "",
    
    galeria: [
      "https://blob.luznoticias.mx/images/2024/11/27/svsadf.jpeg",
      "https://static.losnoticieristas.com/Inauguran-La-Villa-Navidena-dentro-del-Museo-Interactivo-Trapiche-en-Los-Mochis--2.jpg",
      "https://www.meganoticias.mx/uploads/noticias/inauguran-villa-navidena-2021-en-museo-trapiche-292884.jpg"
    ],

    contacto: "eventos@trapiche.org.mx"
  },

  {
    id: 2,
    titulo: "Animeichon",
    fecha: "15 de Marzo 2025",
    lugar: "Centro de Convenciones",
    aboutTitulo: "",   
  aboutImagen: "",
    descripcion: "Perfecta para convenciones y eventos temáticos.",
    portada: "https://noticieroaltavoz.com/wp-content/uploads/2025/10/IMG-20251015-WA0051.jpg",
    
    galeria: [
      "https://noticieroaltavoz.com/wp-content/uploads/2025/10/IMG-20251015-WA0051.jpg",
      "https://i.ytimg.com/vi/XSiuPK7URvs/maxresdefault.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJLVvgQLPLHTCc9AFqPADfhx7uDu5UR2JpA&s",
    ],

     contactoTitulo: "",
  contactoDescripcion: "",
  contactoTelefono: "",
  contactoEmail: "",
  },

  {
    id: 3,
    titulo: "Expogenios",
    fecha: "10 de Junio 2025",
    lugar: "Parque de Innovación",
    aboutTitulo: "",   
  aboutImagen: "",
    descripcion: "Diseñada para ferias de ciencia y exposiciones educativas.",
    portada: "https://static.losnoticieristas.com/Inauguran-la-Expo-Genios-y-la-Feria-de-Ciencias-2023-en-el-Museo-Interactivo-Trapiche-de-Los-Mochis-4.jpg",
    
    galeria: [
      "https://plataformanoticias.mx/wp-content/uploads/2023/11/ce7fd68a-62d8-4173-87b3-ae22ac8289ef-1024x683.jpeg",
      "https://www.debate.com.mx/__export/1731699610919/sites/debate/img/2024/11/15/whatsapp_image_2024-11-15_at_12_11_41.jpeg_686855035.jpeg",
      "https://www.expogenios.org.mx/assets/img/conocenos/mwa/galeria/10_galeria.png"
    ],

     contactoTitulo: "",
  contactoDescripcion: "",
  contactoTelefono: "",
  contactoEmail: "",
  }
];

export function createTemplate(newTemplate) {
  eventTemplates.push(newTemplate);
}


export function updateTemplate(id, updatedData) {
  const index = eventTemplates.findIndex(t => t.id === id);
  if (index !== -1) {
    eventTemplates[index] = { ...eventTemplates[index], ...updatedData };
  }
}