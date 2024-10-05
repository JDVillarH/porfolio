import Astro from "../icons/AstroIcon.astro";
import Bootstrap from "../icons/Bootstrap.astro";
import CSS from "../icons/CSS.astro";
import Email from "../icons/Email.astro";
import FileChecked from "../icons/FileChecked.astro";
import Git from "../icons/Git.astro";
import GitHub from "../icons/GitHub.astro";
import Html from "../icons/Html.astro";
import JavaScript from "../icons/JavaScript.astro";
import JQuery from "../icons/JQuery.astro";
import Laravel from "../icons/Laravel.astro";
import Linked from "../icons/Linked.astro";
import LinkedIn from "../icons/LinkedIn.astro";
import MySQL from "../icons/MySQL.astro";
import Php from "../icons/Php.astro";
import PostgreSQL from "../icons/PostgreSQL.astro";
import React from "../icons/React.astro";
import Sass from "../icons/Sass.astro";
import TailwindCSS from "../icons/TailwindCSS.astro";

const navLinks = [
  {
    title: "Experiencia",
    href: "#experiencia",
  },
  {
    title: "Proyectos",
    href: "#proyectos",
  },
  {
    title: "Sobre mí",
    href: "#sobre-mi",
  },
  {
    title: "Certificados",
    href: "#certificados",
  },
];

const socialLinks = [
  {
    title: "GitHub",
    href: "https://github.com/JDVillarH",
    SocialIcon: GitHub,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/juandiegovh",
    SocialIcon: LinkedIn,
  },
  {
    title: "Email",
    href: "mailto:juandiegom78@gmail.com",
    SocialIcon: Email,
  },
];

const heroSocialLinks = [
  {
    title: "Email",
    href: "mailto:juandiegom78@gmail.com",
    SocialIcon: Email,
  },
  {
    title: "Curriculum",
    href: "https://drive.google.com/file/d/136fsIuAoS7dSs9hVNMcE4reOpj_HZa8F/view",
    SocialIcon: FileChecked,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/juandiegovh",
    SocialIcon: LinkedIn,
  },
];

const skills = [
  {
    title: "HTML",
    Icon: Html,
  },
  {
    title: "CSS",
    Icon: CSS,
  },
  {
    title: "TailwindCSS",
    Icon: TailwindCSS,
  },
  {
    title: "Bootstrap",
    Icon: Bootstrap,
  },
  {
    title: "Sass",
    Icon: Sass,
  },
  {
    title: "JavaScript",
    Icon: JavaScript,
  },
  {
    title: "React",
    Icon: React,
  },
  {
    title: "Astro",
    Icon: Astro,
  },
  {
    title: "JQuery",
    Icon: JQuery,
  },
  {
    title: "PHP",
    Icon: Php,
  },
  {
    title: "Laravel",
    Icon: Laravel,
  },
  {
    title: "PostgreSQL",
    Icon: PostgreSQL,
  },
  {
    title: "MySQL",
    Icon: MySQL,
  },
  {
    title: "Git",
    Icon: Git,
  },
];

const experience = [
  {
    title: "Desarrollador Web | Facturacion.cl",
    description:
      "Responsable del mantenimiento, corrección de errores e implementación de nuevas funcionalidades en un ERP, basado en el análisis de requerimientos, la documentación de soluciones y su desarrollo correspondiente.",
    date: "Junio 2023 - Mayo 2024",
    link: "https://facturacion.cl",
    technologies: ["PHP", "JQuery", "XML", "PostgreSQL"],
  },
  {
    title: "Desarrollador Web | Tejido Digital SAS",
    description:
      "Encargado de la creación de múltiples sitios web y plataformas según los requisitos, como sistemas de control de pacientes, gestión de pedidos, entre otros. Además, me ocupé del mantenimiento, modificación y mejora de proyectos en estado de producción.",
    date: "Abril 2021 - Mayo 2023",
    link: "https://tejidodigital.com/",
    technologies: ["PHP", "Rest API", "JQuery", "FomanticUI", "SASS", "MySQL"],
  },
  {
    title: "Analista de Sistema Junior | Sutherland Global Services",
    description:
      "Dedicado a la revisión funcional de aplicaciones web y al desarrollo de una plataforma de votaciones estudiantil.",
    date: "Junio 2016 - Enero 2017",
    link: "https://www.jobs.sutherlandglobal.com/es/colombia",
    technologies: ["PHP", "JavaScript", "MySQL"],
  },
];

const projects = [
  {
    title: "GoURL - Acortador de enlaces",
    description:
      "Herramienta gratuita diseñada para acortar y personalizar enlaces. Cuenta con más de 200 enlaces acortados y con autenticación disponible a través de GitHub y Google.",
    image: "url_shortener.webp",
    technologies: [
      "Laravel 11",
      "React 18",
      "MySQL",
      "InertiaJS",
      "TailwindCSS",
    ],
    buttons: [
      {
        title: "Código",
        href: "https://github.com/JDVillarH/url_shortener",
        Icon: GitHub,
      },
      {
        title: "Demo",
        href: "https://short.jdvillar.dev/",
        Icon: Linked,
      },
    ],
  },
  {
    title: "PokeAPI - PHP Nativo",
    description:
      "Esta API ha sido diseñada desde cero con PHP nativo, ofreciendo una solución simple y eficiente para quienes buscan implementar o crear una API bajo los estándares REST.",
    image: "pokeapi.webp",
    technologies: ["PHP 8", "MySQL", "Composer"],
    buttons: [
      {
        title: "Código",
        href: "https://github.com/JDVillarH/api-php-nativo",
        Icon: GitHub,
      },
      {
        title: "Demo",
        href: "https://pokeapi.jdvillar.dev/api/v1",
        Icon: Linked,
      },
    ],
  },
  {
    title: "Nibiru Technologies",
    description:
      "Landing page para una agencia de tecnología enfocada en el desarrollo web en Chile. Este proyecto fue desarrollado en colaboración con mi colega Eday Daza.",
    image: "nibiru_technologies.webp",
    technologies: ["Astro", "CSS", "JavaScript"],
    buttons: [
      {
        title: "Código",
        href: "https://github.com/JDVillarH/nibiru_technology_website",
        Icon: GitHub,
      },
      {
        title: "Demo",
        href: "https://nibirutechnologies.com/",
        Icon: Linked,
      },
    ],
  },
];

const certificados = [
  {
    title: "Tecnologo de Análisis y Desarrollo de Sistemas de Información",
    href: "https://drive.google.com/file/d/198usOBK3Bg6EkKHg3ZM7qJp7Q_uGYgnq/view",
    subtitle: "SENA",
  },
  {
    title: "Estándares y Buenas Prácticas para API REST con Laravel",
    href: "https://platzi.com/p/JDVillarH/curso/8154-buenas-practicas-api/diploma/detalle/",
    subtitle: "Platzi",
  },
  {
    title: "React.js con Vite.js y TailwindCSS",
    href: "https://platzi.com/p/JDVillarH/curso/7396-react-vite-tailwindcss/diploma/detalle/",
    subtitle: "Platzi",
  },
  {
    title: "CSS Avanzado",
    href: "https://cursos.desafiolatam.com/certificates/0xramtdlbb",
    subtitle: "Desafío Latam",
  },
  {
    title: "SQL Interactivo",
    href: "https://sqlinteractivo.desafiolatam.com/certificados/f3bd08f2-ddfd-4d30-9bb3-b965dde893db",
    subtitle: "Desafío Latam",
  },
  {
    title: "Git y GitHub",
    href: "https://cursos.desafiolatam.com/certificates/nhomju5ul0",
    subtitle: "Desafío Latam",
  },
  {
    title: "Responsive Web Design",
    href: "https://www.freecodecamp.org/certification/axessjuan/responsive-web-design",
    subtitle: "FreeCodeCamp",
  },
];

export {
  certificados,
  experience,
  heroSocialLinks,
  navLinks,
  projects,
  skills,
  socialLinks,
};
