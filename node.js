
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer( (req,res) => {
    console.log(req.url);
    if(req.url === '/'){
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,content) => {
            if(err) throw err;
        });
    }else if (req.url === '/gallery') {
        fs.readFile(path.join(__dirname, 'public', 'gallery.html'), (err,content) => {
            if(err) throw err;
        });
    }else if (req.url === '/contract'){
        fs.readFile(path.join(__dirname, 'public', 'contract.html'), (err,content) => {
            if(err) throw err;
        });
    
    }else if (req.url === '/style.css'){
        fs.readFile(path.join(__dirname, 'public', 'style.css'), (err,content) => {
            if(err) throw err;
        });
    }
    
    else{
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    }
});

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
    console.log('Server is running on port : '+PORT);
});
