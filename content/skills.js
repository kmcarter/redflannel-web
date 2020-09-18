import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { faScroll, faCode, faGem, faTerminal, faCreditCard, faLowVision, faVial, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faPython, faMicrosoft, faShopify, faReact, faAws, faHtml5, faModx, faWordpress } from '@fortawesome/free-brands-svg-icons';

const skills = [{
  title: "Languages & frameworks",
  skills: [
    {
      name: "Python & Flask",
      description: <Typography paragraph>Python is an old programming language enjoying a resurgence in popularity. It's a newer addition to my palette, but a fast favorite.</Typography>,
      icon: faPython,
    },
    {
      name: "JavaScript & React",
      description: <Typography paragraph>My bread and butter. I have been writing fast, responsive JavaScript since <em>before</em> the days of jQuery.</Typography>,
      icon: faReact,
    },
    {
      name: "C# & .NET Core",
      description: <Typography paragraph>Most of my career has been writing C# for a variety of contexts in a variety of industries, and it's still one of my favorite ecosystems.</Typography>,
      icon: faMicrosoft,
    },
    {
      name: "Ruby on Rails",
      description: <Typography paragraph>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</Typography>,
      icon: faGem,
    },
    {
      name: "HTML5 & CSS3",
      description: <Typography paragraph>Why yes, I <em>can</em> cut up your layout and produce HTML5 and CSS3.</Typography>,
      icon: faHtml5,
    },
  ]
}, {
  title: "Hosting & vendors",
  skills: [
    {
      name: "Amazon Web Services",
      description: <Typography paragraph>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</Typography>,
      icon: faAws,
    },
    {
      name: "Microsoft Azure",
      description: <Typography paragraph>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</Typography>,
      icon: faMicrosoft,
    },
    {
      name: "Shopify",
      description: <Typography paragraph>I focus on theme and plugin customization and coding for <Link href="https://www.shopify.com/?ref=rainworks" target="_blank">Shopify</Link>, my ecommerce solution of choice. I'll help you get set up too.</Typography>,
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
      description: <Typography paragraph>I have deep experience designing, building, and consuming REST-standard APIs.</Typography>,
      icon: faTerminal,
    },
    {
      name: "PCI Compliance",
      icon: faCreditCard,
    },
    {
      name: "Web accessibility (a11y)",
      icon: faLowVision,
    },
    {
      name: "Automated testing",
      icon: faVial,
    },
    {
      name: "Database design",
      icon: faDatabase,
    }
  ]
}
];

export default skills;