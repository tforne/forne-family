import express from "express";
import fs from "fs";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Prefer bundled production assets and fall back to the workspace build
  // output when the server is started directly from source tooling.
  const bundledStaticPath = path.resolve(__dirname, "public");
  const workspaceStaticPath = path.resolve(__dirname, "..", "dist", "public");
  const staticPath =
    process.env.NODE_ENV === "production" || fs.existsSync(bundledStaticPath)
      ? bundledStaticPath
      : workspaceStaticPath;

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
