import GitHub from "../icons/GitHub.astro";
import Linked from "../icons/Linked.astro";

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
  {
    title: "VenEsperanza",
    description:
      "Sitio web autoadministrable oficial de un programa de asistencia para apoyar a familias vulnerables, migrantes venezolanos y comunidades de acogida afectadas por la crisis migratoria venezolana.",
    image: "ven_esperanza.webp",
    technologies: ["PHP 7", "MySQL", "SASS", "JQuery"],
    buttons: [
      {
        title: "Sitio Web",
        href: "https://venesperanza.co/",
        Icon: Linked,
      },
    ],
  },
  {
    title: "MercyCorps",
    description:
      "Sitio web autoadministrable oficial en Colombia para una ONG sin fines de lucro que trabaja en más de 40 países, brinda asistencia humanitaria y fomenta el desarrollo sostenible en comunidades afectadas por crisis",
    image: "mercycorps.webp",
    technologies: ["PHP 7", "MySQL", "SASS", "JQuery"],
    buttons: [
      {
        title: "Sitio Web",
        href: "https://mercycorps.org.co/",
        Icon: Linked,
      },
    ],
  },
  {
    title: "Fundación Fondecor",
    description:
      "Sitio web autoadministrable de una fundación sin ánimo de lucro que promueve el desarrollo social, educativo y cultural en comunidades vulnerables.",
    image: "fondecor.webp",
    technologies: ["PHP 7", "MySQL", "SASS", "JQuery"],
    buttons: [
      {
        title: "Sitio Web",
        href: "https://fundacionfondecor.org.co/",
        Icon: Linked,
      },
    ],
  },
];

export { projects };
