const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Encode the URL to handle special characters safely
    const encodedUrl = encodeURIComponent(req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Encoded URL: ${encodedUrl}`);
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});