// Strict static file preview: no SPA fallback and no application server behavior.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
const root = path.resolve("out");
const port = Number(process.env.PORT || 3000);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".txt": "text/plain", ".xml": "application/xml", ".svg": "image/svg+xml", ".png": "image/png", ".pdf": "application/pdf", ".woff2": "font/woff2", ".ico": "image/x-icon" };
createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost");
    const pathname = decodeURIComponent(url.pathname);
    const target = path.resolve(root, `.${pathname}`);
    if (target !== root && !target.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    let file = target;
    try { if ((await stat(file)).isDirectory()) { if (!pathname.endsWith("/")) { res.writeHead(308, { Location: `${pathname}/${url.search}` }).end(); return; } file = path.join(file, "index.html"); } await stat(file); }
    catch { file = path.join(root, "404.html"); res.statusCode = 404; }
    if (["_headers", "_redirects"].includes(path.basename(file))) { res.writeHead(404).end(); return; }
    res.setHeader("Content-Type", types[path.extname(file)] || "application/octet-stream");
    res.setHeader("X-Content-Type-Options", "nosniff");
    if (req.method === "HEAD") { res.end(); return; }
    res.end(await readFile(file));
  } catch { res.writeHead(400).end("Bad request"); }
}).listen(port, "127.0.0.1", () => console.log(`Static preview: http://localhost:${port}`));
