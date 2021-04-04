import { faGem, faCloud, faLowVision, faVial, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faPython, faMicrosoft, faShopify, faReact, faAws, faDigitalOcean  } from '@fortawesome/free-brands-svg-icons';

const skills = [{
  title: "Languages & frameworks",
  skills: [
    {
      name: "Python & Flask",
      icon: faPython,
    },
    {
      name: "Jamstack (Next.js & Gatsby)",
      icon: faReact
    },
    {
      name: "C# & .NET Core",
      icon: faMicrosoft,
    },
    {
      name: "Ruby & Rails",
      icon: faGem,
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
      name: "DigitalOcean",
      icon: faDigitalOcean,
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
  ]
}
];

export default skills;