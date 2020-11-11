import { faGem, faCloud, faCreditCard, faLowVision, faVial, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faPython, faMicrosoft, faShopify, faReact, faAws, faHtml5, faModx, faWordpress } from '@fortawesome/free-brands-svg-icons';

const skills = [{
  title: "Languages & frameworks",
  skills: [
    {
      name: "Python & Flask",
      icon: faPython,
    },
    {
      name: "JavaScript & React",
      icon: faReact,
    },
    {
      name: "C# & .NET Core",
      icon: faMicrosoft,
    },
    {
      name: "Ruby on Rails",
      icon: faGem,
    },
    {
      name: "HTML5 & CSS3",
      icon: faHtml5,
    },
  ]
}, {
  title: "Hosting & vendors",
  skills: [
    {
      name: "Microsoft Azure",
      icon: faMicrosoft,
    },
    {
      name: "Amazon Web Services",
      icon: faAws,
    },
    {
      name: "Shopify",
      icon: faShopify,
    },
    {
      name: "MODX",
      icon: faModx,
    },
    {
      name: "WordPress",
      icon: faWordpress,
    },
  ]
}, {
  title: "Expertise",
  skills: [
    {
      name: "REST APIs",
      icon: faCloud,
    },
    {
      name: "Integrations",
      icon: faCodeBranch,
    },
    {
      name: "Automated testing",
      icon: faVial,
    },
    {
      name: "Web accessibility",
      icon: faLowVision,
    },
    {
      name: "PCI Compliance",
      icon: faCreditCard,
    },
  ]
}
];

export default skills;