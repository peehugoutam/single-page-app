const http = require("http");
const port = 7050;

const requestHandler = (req, res) => {
  res.end("Hello World!");
};

const server = http.createServer(requestHandler);

server.listen(port, "0.0.0.0", () => {
  console.log(`Server is listening on port ${port}`);
});
