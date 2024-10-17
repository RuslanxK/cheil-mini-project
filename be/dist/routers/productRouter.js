"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = __importDefault(require("../models/product"));
const productUtils_1 = require("../utils/productUtils");
const router = (0, express_1.Router)();
router.get("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.default.find();
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
}));
router.post("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingProduct = yield (0, productUtils_1.checkUniqueProductCode)(req.body.code);
        if (existingProduct) {
            return res.status(400).json({ error: "Product code must be unique" });
        }
        const newProduct = new product_1.default(req.body);
        const savedProduct = yield newProduct.save();
        res.status(201).json(savedProduct);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to create product" });
    }
}));
router.put("/product/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingProduct = yield (0, productUtils_1.checkUniqueProductCode)(req.body.code, req.params.id);
        if (existingProduct) {
            return res.status(400).json({ error: "Product code must be unique" });
        }
        const updatedProduct = yield product_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(updatedProduct);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to update product" });
    }
}));
router.delete("/product/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProduct = yield product_1.default.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    }
    catch (err) {
        res.status(500).json({ error: "Failed to delete product" });
    }
}));
exports.default = router;
