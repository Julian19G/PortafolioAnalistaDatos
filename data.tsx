import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/juli%C3%A1n-guerra-ria%C3%B1o-1a5b9b20b/",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portafolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Tecnico de Sistemas",
        subtitle: "Institucion educativa don bosco",
        description: "Empece mi carrera en el area de sistemas a la edad de 16 años, cursando un tecnico de sistemas en el cual aprendi a instalar sistemas operativos, hacer mantenimiento preventivo y correctivo y a reparar computadores.",
        date: "Julio 2017 ",
    },
    {
        id: 2,
        title: "Tecnologo de desarrollo de sistemas",
        subtitle: "Centro de estudios profecionales fcecep",
        description: "En el 2021 empece mis estudios como tecnologo de sistemas, adquiriendo conocimiento en programacion, teniendo fortalezas en desarrollo web tanto backed como fronted formando asi un full stack",
        date: "Abril 2025",
    },
    {
        id: 3,
        title: "Practicas empresariales",
        subtitle: "Intersalud ocupacional",
        description: "Como aprendiz de sistemas en intersalud ocupacional desarrolle la capacidad de dirigir un area de sistemas, ya que era el encargado del area, fortaleci mi conocimiento como tecnico de sistemas y aprendi a brindar soporte tanto virtual como fisico, capacitaciones, asignacion de equipos, cotizaciones de equipos,etc",
        date: "Ago 2019",
    },
    {
        id: 4,
        title: "Diplomado IoT",
        subtitle: "Centro de estudios profecionales fcecep",
        description: "Para poder terminar mi tecnologia de desarrollo en sistemas informatico hice un diplomado de IoT en el cual aprendi sobre el internet de las cosas, tambien aprendi sobre c+, arduino y thinkercad",
        date: "Feb 2025",
        
    },
    {
        id: 5,
        title: "Bootcamp de Inteligencia Artificial",
        subtitle: "MinTics",
        description: "Actualmente me encuentro cursando un bootcamp de AI en donde estoy aprendiendo el lenguaje de programacion Python, tambien sobre deep learning, machine learning, redes neuronales, regresion y analizar datos",
        date: "Actualmente",

    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 2,
        endCounter: 1,
        text: "Projecto realizados",
        lineRight: true,
        lineRightMobile: true,
    },
];

export const serviceData = [
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "AI",
        description: "Puedo crear modelos predictivos por inteligencia artificial",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Mi portafolio de datos",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/Julian19G/Portafolio",
        urlDemo: "#!",
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];



