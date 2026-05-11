const http = require("http");

const host = "127.0.0.1";
const port = Number(process.env.PORT || 3000);

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Symphony One</title>
  </head>
  <body>
    <h1>Goodbye</h1>
  </body>
</html>`;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end(html);
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
