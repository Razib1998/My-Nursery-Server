import express, { Request, Response } from "express";
import notFound from "./app/middlewares/notFound";
const app = express();

// Parsers

app.use(express.json());
app.use(notFound);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
