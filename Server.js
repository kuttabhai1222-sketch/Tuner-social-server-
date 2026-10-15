const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url === "/api/health") {
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
        error: "Route not found"
    }));
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Tuner Social server running on port ${PORT}`);
});