const express = require('express');

const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const htmlResponse = `
    <html>
        <head>
            <title>NodeJS y express en vercel </title>
        </head>
        <body>
            <h1>Despliegue de un proyecto sencillo en vercel </h1>
        </body>
    </html>`;
    res.send(htmlResponse)
});

app.listen(port, () => {
    console.log(`port runing in http://localhost:${port}`)
});