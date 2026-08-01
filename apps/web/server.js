const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nexus Intelligence Platform</title>
      </head>
      <body>
        <main>
          <h1>Nexus Intelligence Platform</h1>
          <p>Genesis Alpha is running locally.</p>
        </main>
      </body>
    </html>`);
});

server.listen(port, () => {
  console.log(`Server listening on http://127.0.0.1:${port}`);
});
