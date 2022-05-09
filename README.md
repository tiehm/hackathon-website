# Legal Loves Tech Hackathon Frontend

This is the frontend for [legallovestech.de](https://legallovestech.de). 

## Build & Install

Install all dependencies with `npm i` or `npm ci` or any other package manager like `yarn`.  

The project can be built with `npm run build` for a production build WITHOUT using the `homepage` path in `package.json`. 

To build the project with that in mind, use `npm run build-homepage`

Another setup is not needed as there is no ports or anything else which could be stored in the environment. Building produces normal HTML/CSS/JS files without any server needed.

## Github Pages

The website is published [here](https://tiehm.github.io/hackathon-website/) for development, due to the nature of the react router and github page you will end up on an empty pages with just the navigation. For it to work you **must click on "Home" (or any other navigation item)**. You'll be redirected to the actual homepage with the content. 

This problem is of course only present on the development build on github pages and not on the production release (which is not hosted on github pages anyway).
