import { Router, Request, Response } from "express";
import Product from "../models/product";
import { IProduct } from "../interfaces/IProduct";
import { checkUniqueProductCode } from "../utils/productUtils";

const router = Router();

router.get("/products", async (req: Request, res: Response) => {
  try {
    const products: IProduct[] = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

router.post(
  "/products",
  async (req: Request<{}, {}, IProduct>, res: Response) => {
    try {

      const existingProduct = await checkUniqueProductCode(req.body.code);
      if (existingProduct) {
        return res.status(400).json({ error: "Product code must be unique" });
      }

      const newProduct = new Product(req.body);
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (err) {
      res.status(500).json({ error: "Failed to create product" });
    }
  }
);

router.put(
  "/product/:id",
  async (req: Request<{ id: string }, {}, IProduct>, res: Response) => {
    try {
      
      const existingProduct = await checkUniqueProductCode(req.body.code, req.params.id);
      if (existingProduct) {
        return res.status(400).json({ error: "Product code must be unique" });
      }

      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json({ error: "Failed to update product" });
    }
  }
);

router.delete("/product/:id", async (req: Request, res: Response) => {
  try {

    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete product" });
  }
});

export default router;
