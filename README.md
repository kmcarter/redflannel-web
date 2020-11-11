# Red Flannel Website

This is a public repository for the website of my freelancing business, [Red Flannel Web Services LLC](https://redflannel.co). I decided to make it public and open source primarily so that prospective clients or employers can see a published example of my work. However, other developers, particularly those new to Next.js, may find some useful examples for their own work here. (If that's you, see below for some notes about the styling.)

## About

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). In addition, it relies on:

- [Material-UI](https://material-ui.com/), a React UI framework
- [Stellar](https://html5up.net/stellar), a free HTML5 template by [HTML5Up](https://html5up.net/)
- [Font Awesome](https://fontawesome.com/) icons
- [Amazon Web Services](https://aws.amazon.com/), including: SES, Amplify
- [Google RECAPTCHA](https://www.google.com/recaptcha/) (v3)

## Getting Started

First, I did not use Next.js's `/api` backend feature for this project because Amplify does not support it out of the box. For simplicity, I implemented the API in Amplify's Lambda function "category." Note that if you want to deploy this project to your own AWS account, you may have to fiddle with Amplify settings or [start fresh](https://docs.amplify.aws/cli/start/workflows#initialize-new-project).

Make a copy of `example.env.local` named `.env.local` and add your AWS and Google RECAPTCHA keys. Then you have two options. If you just want to see the front-end Next.js site, then don't worry about about the `NEXT_PUBLIC_RF_BASE_API` environment variable and just run the local development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You will not be able to successfully submit the contact form.

If you want to be able to submit the contact form, you will need to deploy to AWS. Roughly speaking, you will want to go through this process:

```bash
# configure Amplify with what it needs to deploy to your AWS account
amplify configure
# add an environment to publish your api category to
amplify env add
# builds the front-end js
next build
# pushes backend code up to Amplify, then runs a local dev server of your front-end code (the equivalent of running `next start`)
amplify serve
```

You will also have to do some setup on the Amplify console (run `amplify console`) to host the front-end code.

## About the design

Material-UI and Stellar, the HTML5 template, are not compatible out of the box. For the most part, I attempted to strip out Stellar's layout and spacing styles and kept its typography and color palettes. In this way, Material-UI is responsible for the layout, but Stellar is responsible for the look-and-feel. Luckily, Stellar (and I believe most of HTML5Up's templates) come with a complete set of SASS stylesheets. I copied them all into the project, then began carefully eliminating styles I wouldn't need. This was a somewhat arduous process and required care, time, and SASS debugging. I'm sure there are some idiosyncracies that I've missed during this process. I chose to do it this way because I wanted some hands-on demo time with Material-UI since I am considering using it for another project.

## License

This project is licensed under the [Mozilla Public License Version 2.0](https://github.com/kmcarter/redflannel-web/blob/master/LICENSE).