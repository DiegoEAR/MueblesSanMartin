const products = [
  {
    id: 1,
    image: "/TiendaIMG/Cocina/Bajo mesadas y Alacenas/AlacenaPlatinum120.jpg",
    title: "Alacena Platinum 1.20",
    category: "Bajo mesadas y Alacenas",
    price: "45000"  
  },
  {
    id: 2,
    image: "/TiendaIMG/Cocina/Bajo mesadas y Alacenas/BajoMesadaPlatinum120.jpg",
    title: "Bajo Mesada Platinum 1.20",
    category: "Bajo mesadas y Alacenas",
    price: "70000" 
  },
  {
    id: 3,
    image: "/TiendaIMG/Cocina/Bajo mesadas y Alacenas/AlacenaOrlandi140.png",
    title: "Alacena Orlandi 1.40",
    category: "Bajo mesadas y Alacenas",
    price: "75000" 
  },
  {
    id: 4,
    image: "/TiendaIMG/Cocina/Bajo mesadas y Alacenas/BajoMesadaOrlandi140.png",
    title: "Bajo Mesada Platinum 1.40",
    category: "Bajo mesadas y Alacenas",
    price: "103000" 
  },
  {
    id: 5,
    image: "/TiendaIMG/Cocina/Desayunadores y Mesas/DesayunadorOrlandi.jpg",
    title: "Desayunador Platinum",
    category: "Desayunadores y Mesas",
    price: "75000" 
  },
  {
    id: 6,
    image: "/TiendaIMG/Cocina/Desayunadores y Mesas/MesaOrlandi.jpg",
    title: "Mesa Platinum",
    category: "Desayunadores y Mesas",
    price: "70000" 
  },
  {
    id: 7,
    image: "/TiendaIMG/Cocina/Kits de cocina/KitCocinaOrlandi090.png",
    title: "Kit de Cocina Orlandi 0.90",
    category: "Kits de cocina",
    price: "105000" 
  },
  {
    id: 8,
    image: "/TiendaIMG/Cocina/Kits de cocina/KitCocinaOrlandi120.png",
    title: "Kit de Cocina Orlandi 1.20",
    category: "Kits de cocina",
    price: "120000" 
  },
  {
    id: 9,
    image: "/TiendaIMG/Cocina/Kits de cocina/KitDoblePlatinum.png",
    title: "Kit Doble Orlandi",
    category: "Kits de cocina",
    price: "95000" 
  },
  {
    id: 10,
    image: "/TiendaIMG/Cocina/Kits de cocina/KitTriplePlatinum.png",
    title: "Kit Triple Orlandi",
    category: "Kits de cocina",
    price: "108000" 
  },
  {
    id: 11,
    image: "/TiendaIMG/Cocina/Multifunciones/3045Platinum.jpg",
    title: "Multifuncion 3045 Platinum",
    category: "Multifunciones",
    price: "50000" 
  },
  {
    id: 12,
    image: "/TiendaIMG/Cocina/Multifunciones/3046Platinum.jpg",
    title: "Multifuncion 3046 Platinum",
    category: "Multifunciones",
    price: "50000" 
  },
  {
    id: 13,
    image: "/TiendaIMG/Cocina/Multifunciones/3092Platinum.jpg",
    title: "Multifuncion 3092 Platinum",
    category: "Multifunciones",
    price: "60000" 
  },
  {
    id: 14,
    image: "/TiendaIMG/Cocina/Multifunciones/403Platinum.png",
    title: "Multifuncion 403 Orlandi",
    category: "Multifunciones",
    price: "65500" 
  },
  {
    id: 15,
    image: "/TiendaIMG/Cocina/Multifunciones/405Platinum.png",
    title: "Multifuncion 405 Platinum",
    category: "Multifunciones",
    price: "69500" 
  },
  {
    id: 16,
    image: "/TiendaIMG/Cocina/Multifunciones/9019Platinum.jpg",
    title: "Multifuncion 9019 Platinum",
    category: "Multifunciones",
    price: "54000" 
  },
  {
    id: 17,
    image: "/TiendaIMG/Cocina/Multifunciones/MultifuncionOrlandi716.png",
    title: "Multifuncion Orlandi 716",
    category: "Multifunciones",
    price: "145000" 
  },
  {
    id: 18,
    image: "/TiendaIMG/Cocina/Multifunciones/MultifuncionOrlandi745.png",
    title: "Multifuncion Orlandi 745",
    category: "Multifunciones",
    price: "55500" 
  },
  {
    id: 19,
    image: "/TiendaIMG/Comedor/Mesa de Tv/BahiutOrlandi.png",
    title: "Bahiut Orlandi 2,25",
    category: "Mesas de Tv",
    price: "199000" 
  },
  {
    id: 20,
    image: "/TiendaIMG/Comedor/Mesa de Tv/BahiutPlatinum.jpg",
    title: "Bahiut Platinum",
    category: "Mesas de Tv",
    price: "90000" 
  },
  {
    id: 21,
    image: "/TiendaIMG/Comedor/Mesa de Tv/MesaDeTvConRuedasPLatinum.jpg",
    title: "Mesa de Tv Platinum C/Ruedas",
    category: "Mesas de Tv",
    price: "48000" 
  },
  {
    id: 22,
    image: "/TiendaIMG/Comedor/Mesa de Tv/MesaDeTvOrlandi.jpg",
    title: "Mesa de Tv Platinum",
    category: "Mesas de Tv",
    price: "99000" 
  },
  {
    id: 23,
    image: "/TiendaIMG/Comedor/Mesa de Tv/PanelTv.jpg",
    title: "Panel Tv",
    category: "Mesas de Tv",
    price: "55000" 
  },
  {
    id: 24,
    image: "/TiendaIMG/Comedor/Modulares/Modular120Orlandi.png",
    title: "Modular Orlandi 1.20",
    category: "Modulares",
    price: "12000" 
  },
  {
    id: 25,
    image: "/TiendaIMG/Comedor/Modulares/Modular140Orlandi.png",
    title: "Modular Orlandi 1.40",
    category: "Modulares",
    price: "135000" 
  },
  {
    id: 26,
    image: "/TiendaIMG/Comedor/Modulares/Modular160Orlandi.png",
    title: "Modular Orlandi 1.60",
    category: "Modulares",
    price: "160000" 
  },
  {
    id: 27,
    image: "/TiendaIMG/Comedor/Modulares/Modular180Orlandi.png",
    title: "Modular Orlandi 1.80",
    category: "Modulares",
    price: "19000" 
  },
  {
    id: 28,
    image: "/TiendaIMG/Comedor/Modulares/Modular557PLatinum.jpg",
    title: "Modular 557 Platinum",
    category: "Modulares",
    price: "135000" 
  },
  {
    id: 29,
    image: "/TiendaIMG/Oficina/Bibliotecas/Archivador505Platinum.jpeg",
    title: "Archivador 505 Platinum",
    category: "Bibliotecas",
    price: "90000" 
  },
  {
    id: 30,
    image: "/TiendaIMG/Oficina/Bibliotecas/Biblioteca530Platinum.jpg",
    title: "Biblioteca 530 Platinum",
    category: "Bibliotecas",
    price: "89000" 
  },
  {
    id: 31,
    image: "/TiendaIMG/Oficina/Bibliotecas/Biblioteca531Platinum.jpg",
    title: "Biblioteca 531 Platinum",
    category: "Bibliotecas",
    price: "75000" 
  },
  {
    id: 32,
    image: "/TiendaIMG/Oficina/Bibliotecas/Biblioteca9013Platinum.jpg",
    title: "Biblioteca 9013 Platinum",
    category: "Bibliotecas",
    price: "39000" 
  },
  {
    id: 33,
    image: "/TiendaIMG/Oficina/Escritorios/Escritorio501Platinum.jpg",
    title: "Escritorio 501 Platinum",
    category: "Escritorios",
    price: "70000" 
  },
  {
    id: 34,
    image: "/TiendaIMG/Oficina/Escritorios/Escritorio503Platinum.jpg",
    title: "Escritorio 503 Platinum",
    category: "Escritorios",
    price: "109000" 
  },
  {
    id: 35,
    image: "/TiendaIMG/Oficina/Escritorios/Escritorio9038Platinum.jpg",
    title: "Escritorio 9038 Platinum",
    category: "Escritorios",
    price: "42000" 
  },
  {
    id: 36,
    image: "/TiendaIMG/Dormitorio/Mesas de Luz/MesaDeLuz962Platinum.jpg",
    title: "Mesa de Luz 962 Platinum",
    category: "Mesas de Luz",
    price: "32000" 
  },
  {
    id: 37,
    image: "/TiendaIMG/Dormitorio/Mesas de Luz/MesaDeLuzOrlandi.png",
    title: "Mesa de Luz Orlandi",
    category: "Mesas de Luz",
    price: "29500" 
  },
  {
    id: 38,
    image: "/TiendaIMG/Dormitorio/Mesas de Luz/MesaDeLuzPremiumOrlandi.png",
    title: "Mesa de Luz Premium Orlandi",
    category: "Mesas de Luz",
    price: "58000" 
  },
  {
    id: 39,
    image: "/TiendaIMG/Dormitorio/Comodas y Cajoneras/Cajonera920Platinum.png",
    title: "Cajonera 920 Platinum",
    category: "Comodas y Cajoneras",
    price: "60000" 
  },
  {
    id: 40,
    image: "/TiendaIMG/Dormitorio/Comodas y Cajoneras/Comoda921Platinum.jpg",
    title: "Comoda 921 Platinum",
    category: "Comodas y Cajoneras",
    price: "72000" 
  },
  {
    id: 41,
    image: "/TiendaIMG/Dormitorio/Comodas y Cajoneras/Comoda2606Platinum.jpg",
    title: "Comoda 2606 Platinum",
    category: "Comodas y Cajoneras",
    price: "90000" 
  },
  {
    id: 42,
    image: "/TiendaIMG/Dormitorio/Placares Premium/Placard252Orlandi.png",
    title: "Placard 252 Orlandi",
    category: "Placares Premium",
    price: "317000" 
  },
  {
    id: 43,
    image: "/TiendaIMG/Dormitorio/Placares Premium/Placard271Orlandi.png",
    title: "Placard 271 Orlandi",
    category: "Placares Premium",
    price: "390000" 
  },
  {
    id: 44,
    image: "/TiendaIMG/Dormitorio/Placares Premium/Placard1004Platinum.png",
    title: "Placard 1004 Platinum",
    category: "Placares Premium",
    price: "135000" 
  },
  {
    id: 45,
    image: "/TiendaIMG/Dormitorio/Placares Premium/Placard1006Platinum.png",
    title: "Placard 1006 Platinum",
    category: "Placares Premium",
    price: "189000" 
  }
]

export default products;

export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {});