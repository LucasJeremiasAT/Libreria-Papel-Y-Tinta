const productos = [
    {
        "id": 1,
        "nombre": "Cuaderno espiralado A4",
        "precio": 3.50,
        "categoria": "utiles",
        "imagen": "/imgs/cuaderno-espiralado-A4.jpg",
        "stock": 50,
        "descripcion": "Cuaderno de tapa dura con 80 hojas rayadas.",
        "hasColorPick": false
    },
    {
        "id": 2,
        "nombre": "Lápiz de grafito HB",
        "precio": 0.50,
        "categoria": "utiles",
        "imagen": "/imgs/lapiz-de-grafito-HB.jpg",
        "stock": 120,
        "descripcion": "Lápiz hexagonal con goma de borrar en la punta.",
        "hasColorPick": false
    },
    {
        "id": 3,
        "nombre": "Lapicera de tinta azul",
        "precio": 1.25,
        "categoria": "utiles",
        "imagen": "/imgs/lapicera-de-tinta-azul.jpg",
        "stock": 90,
        "descripcion": "Lapicera retráctil de punta fina, tinta azul.",
        "hasColorPick": false
    },
    {
        "id": 4,
        "nombre": "Set de lápices de colores",
        "precio": 5.99,
        "categoria": "utiles",
        "imagen": "/imgs/lapices-de-colores.jpg",
        "stock": 35,
        "descripcion": "Set de 12 lápices de colores surtidos en caja de carton.",
        "hasColorPick": false
    },
    {
        "id": 5,
        "nombre": "Goma de borrar de miga",
        "precio": 0.75,
        "categoria": "utiles",
        "imagen": "/imgs/goma-de-borrar-de-miga.jpg",
        "stock": 150,
        "descripcion": "Goma de borrar suave que no deja marcas, ideal para lápiz.",
        "hasColorPick": false
    },
    {
        "id": 6,
        "nombre": "Regla de 15cm",
        "precio": 1.00,
        "categoria": "utiles",
        "imagen": "/imgs/regla-de-15cm.jpg",
        "stock": 75,
        "descripcion": "Regla de plástico transparente con escala en milímetros y pulgadas.",
        "hasColorPick": true
    },
    {
        "id": 7,
        "nombre": "Corrector líquido",
        "precio": 2.20,
        "categoria": "utiles",
        "imagen": "/imgs/corrector-liquido.jpg",
        "stock": 60,
        "descripcion": "Corrector de secado rápido con aplicador de pincel.",
        "hasColorPick": false
    },
    {
        "id": 8,
        "nombre": "Resaltador fluorescente",
        "precio": 1.50,
        "categoria": "utiles",
        "imagen": "/imgs/resaltador-fluorescente.jpg",
        "stock": 85,
        "descripcion": "Resaltador de punta biselada para líneas finas y gruesas, color amarillo.",
        "hasColorPick": true
    },
    {
        "id": 9,
        "nombre": "Tijera escolar punta redonda",
        "precio": 2.50,
        "categoria": "utiles",
        "imagen": "/imgs/tijera-escolar-punta-redonda.jpg",
        "stock": 40,
        "descripcion": "Tijera segura para niños, con hojas de acero inoxidable.",
        "hasColorPick": true
    },
    {
        "id": 10,
        "nombre": "Set de marcadores permanentes",
        "precio": 6.75,
        "categoria": "utiles",
        "imagen": "/imgs/set-de-marcadores-permanentes.png",
        "stock": 25,
        "descripcion": "Pack de 6 marcadores de colores variados, tinta permanente.",
        "hasColorPick": false
    },
    {
        "id": 11,
        "nombre": "Sacapuntas con depósito",
        "precio": 1.50,
        "categoria": "utiles",
        "imagen": "/imgs/sacapuntas-con-deposito.jpg",
        "stock": 100,
        "descripcion": "Sacapuntas de plástico con depósito para virutas.",
        "hasColorPick": true
    },
    {
        "id": 12,
        "nombre": "Cinta adhesiva",
        "precio": 0.90,
        "categoria": "utiles",
        "imagen": "/imgs/cinta-adhesiva.jpg",
        "stock": 200,
        "descripcion": "Cinta transparente de 12mm x 10m.",
        "hasColorPick": false
    },
    {
        "id": 13,
        "nombre": "Carpeta de anillas",
        "precio": 4.50,
        "categoria": "utiles",
        "imagen": "/imgs/carpeta-de-anillas.jpg",
        "stock": 55,
        "descripcion": "Carpeta de cartón con 2 anillas para hojas A4.",
        "hasColorPick": true
    },
    {
        "id": 14,
        "nombre": "Calculadora básica",
        "precio": 8.00,
        "categoria": "utiles",
        "imagen": "/imgs/calculadora-basica.jpg",
        "stock": 30,
        "descripcion": "Calculadora de bolsillo con funciones básicas.",
        "hasColorPick": false
    },
    {
        "id": 15,
        "nombre": "Témperas de colores",
        "precio": 9.50,
        "categoria": "utiles",
        "imagen": "/imgs/temperas-de-colores.jpg",
        "stock": 20,
        "descripcion": "Set de 6 botes de témpera no tóxica para niños.",
        "hasColorPick": false
    },
    {
        "id": 16,
        "nombre": "Plastilina en barra",
        "precio": 3.00,
        "categoria": "utiles",
        "imagen": "/imgs/plastilina-en-barra.jpg",
        "stock": 70,
        "descripcion": "Barra de plastilina para modelar, no se seca.",
        "hasColorPick": true
    },
    {
        "id": 17,
        "nombre": "Crayones de cera",
        "precio": 4.25,
        "categoria": "utiles",
        "imagen": "/imgs/crayones-de-cera.jpg",
        "stock": 50,
        "descripcion": "Caja con 12 crayones de cera de colores vibrantes.",
        "hasColorPick": false
    },
    {
        "id": 18,
        "nombre": "Pinceles para pintura",
        "precio": 7.00,
        "categoria": "utiles",
        "imagen": "/imgs/pinceles-para-pintura.jpg",
        "stock": 25,
        "descripcion": "Set de 5 pinceles de diferentes grosores.",
        "hasColorPick": false
    },
    {
        "id": 19,
        "nombre": "Acuarelas en pastillas",
        "precio": 8.50,
        "categoria": "utiles",
        "imagen": "/imgs/acuarelas-en-pastillas.jpg",
        "stock": 30,
        "descripcion": "Caja de 12 colores de acuarelas con pincel.",
        "hasColorPick": false
    },
    {
        "id": 20,
        "nombre": "Grapadora pequeña",
        "precio": 5.00,
        "categoria": "utiles",
        "imagen": "/imgs/grapadora-pequeña.jpg",
        "stock": 45,
        "descripcion": "Grapadora de mano ideal para trabajos de oficina y escuela.",
        "hasColorPick": true
    },
    {
        "id": 21,
        "nombre": "Mochila escolar Adventure",
        "precio": 35.99,
        "categoria": "accesorios",
        "imagen": "/imgs/mochila-escolar-adventure.jpg",
        "stock": 20,
        "descripcion": "Mochila ergonómica con varios compartimentos y diseño moderno.",
        "hasColorPick": true
    },
    {
        "id": 22,
        "nombre": "Cartuchera cilíndrica",
        "precio": 8.75,
        "categoria": "accesorios",
        "imagen": "/imgs/cartuchera-cilindrica.jpg",
        "stock": 40,
        "descripcion": "Cartuchera de tela resistente con cierre y gran capacidad.",
        "hasColorPick": true
    },
    {
        "id": 23,
        "nombre": "Lonchera térmica",
        "precio": 15.50,
        "categoria": "accesorios",
        "imagen": "/imgs/lonchera-termica.jpg",
        "stock": 30,
        "descripcion": "Lonchera aislada para mantener los alimentos frescos.",
        "hasColorPick": true
    },
    {
        "id": 24,
        "nombre": "Estuche para geometría",
        "precio": 9.99,
        "categoria": "accesorios",
        "imagen": "/imgs/estuche-para-geometria.jpg",
        "stock": 25,
        "descripcion": "Estuche completo con compás, transportador y escuadras.",
        "hasColorPick": false
    },
    {
        "id": 25,
        "nombre": "Portafolio plástico",
        "precio": 7.20,
        "categoria": "accesorios",
        "imagen": "/imgs/portafolio-plastico.jpg",
        "stock": 30,
        "descripcion": "Portafolio de plástico con broche para documentos A4.",
        "hasColorPick": true
    },
    {
        "id": 26,
        "nombre": "Botella de agua deportiva",
        "precio": 12.00,
        "categoria": "accesorios",
        "imagen": "/imgs/botella-de-agua-deportiva.jpg",
        "stock": 50,
        "descripcion": "Botella de 750ml, libre de BPA, ideal para deporte o escuela.",
        "hasColorPick": true
    },
    {
        "id": 27,
        "nombre": "Libro de pegatinas",
        "precio": 6.50,
        "categoria": "utiles",
        "imagen": "/imgs/libro-de-pegatinas.jpg",
        "stock": 40,
        "descripcion": "Libro con más de 1000 pegatinas de diferentes diseños.",
        "hasColorPick": false
    },
    {
        "id": 28,
        "nombre": "Carpeta de plástico flexible",
        "precio": 3.80,
        "categoria": "utiles",
        "imagen": "/imgs/carpeta-de-plastico-flexible.jpg",
        "stock": 65,
        "descripcion": "Carpeta flexible para guardar documentos y trabajos escolares.",
        "hasColorPick": true
    },
    {
        "id": 29,
        "nombre": "Globo terráqueo",
        "precio": 25.00,
        "categoria": "accesorios",
        "imagen": "/imgs/globo-terraqueo.jpg",
        "stock": 15,
        "descripcion": "Globo terráqueo con división política y base giratoria.",
        "hasColorPick": false
    },
    {
        "id": 30,
        "nombre": "Caja de colores de cera",
        "precio": 5.50,
        "categoria": "utiles",
        "imagen": "/imgs/caja-de-colores-de-cera.jpg",
        "stock": 55,
        "descripcion": "Caja de 24 colores de cera para proyectos de arte.",
        "hasColorPick": false
    },
    {
        "id": 31,
        "nombre": "Lápices de colores pastel",
        "precio": 7.50,
        "categoria": "utiles",
        "imagen": "/imgs/lapices-de-colores-pastel.jpg",
        "stock": 40,
        "descripcion": "Set de 12 lápices de colores con tonos pastel.",
        "hasColorPick": false
    },
    {
        "id": 32,
        "nombre": "Agenda escolar 2025",
        "precio": 10.99,
        "categoria": "utiles",
        "imagen": "/imgs/agenda-escolar-2025.jpg",
        "stock": 25,
        "descripcion": "Agenda diaria para planificar tareas y exámenes.",
        "hasColorPick": false
    },
    {
        "id": 33,
        "nombre": "Tijera escolar para zurdos",
        "precio": 3.00,
        "categoria": "utiles",
        "imagen": "/imgs/tijera-escolar-para-zurdos.jpg",
        "stock": 15,
        "descripcion": "Diseñada ergonómicamente para un uso cómodo para personas zurdas.",
        "hasColorPick": true
    },
    {
        "id": 34,
        "nombre": "Set de compás y reglas",
        "precio": 11.50,
        "categoria": "utiles",
        "imagen": "/imgs/set-de-compas-y-reglas.jpg",
        "stock": 20,
        "descripcion": "Kit completo para dibujo técnico y geometría.",
        "hasColorPick": false
    },
    {
        "id": 35,
        "nombre": "Carpeta con folios transparentes",
        "precio": 5.99,
        "categoria": "utiles",
        "imagen": "/imgs/carpeta-con-folios-transparentes.jpg",
        "stock": 45,
        "descripcion": "Carpeta para organizar y proteger documentos.",
        "hasColorPick": true
    },
    {
        "id": 36,
        "nombre": "Cartuchera de dos compartimentos",
        "precio": 10.50,
        "categoria": "accesorios",
        "imagen": "/imgs/cartuchera-de-dos-compartimentos.jpg",
        "stock": 30,
        "descripcion": "Cartuchera con cierre y doble compartimento para separar lápices de marcadores.",
        "hasColorPick": false
    },
    {
        "id": 37,
        "nombre": "Mochila con diseño de astronauta",
        "precio": 45.00,
        "categoria": "accesorios",
        "imagen": "/imgs/mochila-con-diseño-de-astronauta.jpg",
        "stock": 10,
        "descripcion": "Mochila infantil con estampado de astronauta.",
        "hasColorPick": false
    },
    {
        "id": 38,
        "nombre": "Lonchera de neopreno",
        "precio": 18.00,
        "categoria": "accesorios",
        "imagen": "/imgs/lonchera-de-neopreno.jpg",
        "stock": 25,
        "descripcion": "Lonchera flexible y resistente, fácil de lavar.",
        "hasColorPick": true
    },
    {
        "id": 39,
        "nombre": "Reloj de pared analógico",
        "precio": 14.00,
        "categoria": "accesorios",
        "imagen": "/imgs/reloj-de-pared-analogico.jpg",
        "stock": 18,
        "descripcion": "Reloj simple para el aula o cuarto de estudio.",
        "hasColorPick": false
    },
    {
        "id": 40,
        "nombre": "Organizador de escritorio",
        "precio": 9.50,
        "categoria": "accesorios",
        "imagen": "/imgs/organizador-de-escritorio.jpg",
        "stock": 22,
        "descripcion": "Organizador de plástico con varios compartimentos para lápices, clips y más.",
        "hasColorPick": false
    }
];

export default productos