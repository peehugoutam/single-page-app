// Load the http module to create an HTTP server.
const http = require("http");

// Configure the HTTP server to respond with "Hello, World!" to all requests.
const hostname = "127.0.0.1";
const port = 7050;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set the HTTP status code to 200 (OK)
  res.setHeader("Content-Type", "text/plain"); // Set the content type to plain text
  res.end("Hello, World!\n"); // Send the response body
});

// Make the server listen on the specified port and hostname.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
