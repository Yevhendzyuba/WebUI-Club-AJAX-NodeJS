const http = require('http');
const port = 8000;
const fs = require('fs');


const server = http.createServer(function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    fs.readFile('users.json', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write("Error: file not found")

        } else {
            res.write(data);
        }
        res.end()
    })
})



server.listen(port, function(error) {
    if (error) {
        console.log("Something went wrong", error);
    } else {
        console.log("Server is listening on port " + port);
    }
})