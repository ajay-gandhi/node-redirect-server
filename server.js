const http = require("http");

const NEW_HOST = process.env.REDIRECT_HOST;
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

server.listen(process.env.PORT || 8000);
