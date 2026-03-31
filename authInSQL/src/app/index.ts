import express from "express";
import type { Express } from "express";

export function createExpressApplication(): Express {
  const app = express();
  //Routes
  app.get("/", (req, res) => {
    return res.json({ message: "hello" });
  });

  return app;
}
