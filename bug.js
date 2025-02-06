const http = require('http');

const server = http.createServer((req, res) => {
  // The following line is the source of the bug
  res.end(req.url);
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});