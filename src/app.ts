import express, { Request, Response } from "express";
// import notFound from "./app/middlewares/notFound";
import { ProductRoutes } from "./app/modules/products/product.route";
const app = express();

// Parsers

app.use(express.json());
app.use("/api/v1/product", ProductRoutes);
// app.use(notFound);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
