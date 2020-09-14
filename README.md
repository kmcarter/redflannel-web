# Red Flannel Website

This is a public repository for the website of my freelancing business, [Red Flannel Web Services LLC](https://redflannel.co). I decided to make it public and open source primarily so that prospective clients or employers can see a published example of my work. However, other developers, particularly those new to Next.js, may find some useful examples for their own work here. (If that's you, see below for some notes about the styling.)

## About

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). In addition, it relies on:

- Material-UI, a React UI framework
- Stellar, a free HTML5 template by [HTML5Up](https://html5up.net/)
- Font Awesome icons
- Amazon Web Services, including: S3, SES, CloudFront
- Google RECAPTCHA (v3)

## Getting Started

First, make a copy of `example.env.local` named `.env.local` and add your AWS and Google RECAPTCHA keys. Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About the design
Material-UI and Stellar, the HTML5 template, are not compatible out of the box. For the most part, I attempted to strip out Stellar's layout and spacing styles and kept its typography and color palettes. In this way, Material-UI is responsible for the layout, but Stellar is responsible for the look-and-feel. Luckily, Stellar (and I believe most of HTML5Up's templates) come with a complete set of SASS stylesheets. I copied them all into the project, then began carefully eliminating styles I wouldn't need. This was a somewhat arduous process and required care, time, and SASS debugging. I'm sure there are some idiosyncracies that I've missed during this process.