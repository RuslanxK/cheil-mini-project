"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productRouter_1 = __importDefault(require("./routers/productRouter"));
require("./configs/database");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8000;
const NODE_ENV = process.env.NODE_ENV || 'development';
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('API is running...');
});
app.use('/api', productRouter_1.default);
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({
        message: 'Internal Server Error',
        error: NODE_ENV === 'development' ? err.message : 'Something went wrong!',
    });
});
app.listen(PORT, () => {
    console.log(`Server is running in ${NODE_ENV} mode on port ${PORT}`);
});
