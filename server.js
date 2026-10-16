const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/api/health" && req.method === "GET") {
    res.writeHead(200);
    res.end(JSON.stringify({
      app: "Tuner Social",
      server: "online",
      status: "working"
    }));
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({
    error: "Route not found",
    message: "This endpoint has not been added yet."
  }));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Tuner Social server running on port ${PORT}`);
});
