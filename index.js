
//DECLARE THE NEEDED MODULES
const http = require('http');
const fs = require('fs');
const port = 8080;

//CREATE THE SERVER
http.createServer(function (request, response) {

  //SET THE HEADER
  response.setHeader('Content-Type', 'text/html');
  
  
  let path = './Basic Server Setup/'

  //CREATE SWITCH CASE ON request.url
  switch(request.url){
    case '/' : path += 'index.html';
               break;
    case '/about' : path += 'about.html';
                    break;
    case 'contact' : path += 'contact.html';
                     break;
    default: path += '404.html';
             break;

  }

  //READ THE PATH
  fs.readFile(path,(error,data) => {
    if(error){
        console.log(error);
        response.end();
    }
    else{
        response.end(data);
    }
  })

}).listen(8080);

console.log('Server running at http://localhost:8080/');