const http = require("http");

const NEW_HOST = process.argv[2];
if (!NEW_HOST) {
  console.log("Error: No redirect host specified");
  process.exit(1);
}

const server = http.createServer((req, res) => {
  res.writeHead(302, {
    location: `${NEW_HOST}${req.url}`,
  });
  res.end();
});

server.listen(process.argv[3] || 8004);
