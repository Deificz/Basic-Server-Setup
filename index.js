const express = require('express');
const app = express();
const port = 8080;

//Send HTML intended files
app.get("/", (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get("/about", (request, response) => {
    response.sendFile(__dirname + '/about.html');
});

app.get("/contact", (request, response) => {
    response.sendFile(__dirname + '/contact.html');
});

//Error handling
app.use((err, request, response, next) => {
    console.error(err.stack);
    response.status(500).sendFile(__dirname + '/404.html'); 
});

app.listen(port, () => {
    console.log(`App listening to http://localhost:${port}/`);
});
