# URL-TO-PDF

> Note: This is not a product-level project. i made this project because i though there weren't but there was https://github.com/alvarcarto/url-to-pdf-api which is pretty stable.
>
> Only consider this project for learning & understanding the concept

Node.js application printing specific URL adress as PDF file

## Docker Deployment

as this application is on Docker hub, you can easily deploy

```bash
docker pull kkobuk/url-to-pdf
docker run -d -p 8080:8080 --name url-to-pdf kkobuk/url-to-pdf
```

## Development Environment

```bash
git clone https://github.com/Shane-Park/url-to-pdf.git
cd url-to-pdf
npm install
```

```bash
npm run dev
```

The application will open on `https://localhost:8080`

## Docker Build

```bash
docker build -t url-to-pdf .
docker run -p 8080:8080 url-to-pdf
```

Originally from: [node-express-puppeteer-pdf-example](https://github.com/christopher-talke/node-express-puppeteer-pdf-example)

## API

you can request PDF file with URL `localhost:8080/generate-pdf?url=[specific URL including protocol]`. example below renders Google landing page

```
localhost:8080/generate-pdf?url=https://google.com
```

