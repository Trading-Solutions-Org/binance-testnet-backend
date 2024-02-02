"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const binance_controller_1 = __importDefault(require("./controllers/binance/binance-controller"));
const trading_view_controller_1 = __importDefault(require("./controllers/trading-view/trading-view-controller"));
const errors_1 = require("./shared/utils/errors");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8090;
const originsCors = [
    'http://localhost:4000',
    'https://52.89.214.238',
    'https://34.212.75.30',
    'https://54.218.53.128',
    'https://52.32.178.7',
];
app.use((0, cors_1.default)({ origin: originsCors }));
app.use(express_1.default.json());
app.use((0, morgan_1.default)('tiny'));
app.use('/api/binance', binance_controller_1.default);
app.use('/api/trading-view', trading_view_controller_1.default);
app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
});
// eslint-disable-next-line consistent-return
app.use((request, response) => {
    if (request instanceof errors_1.AppError) {
        return response.status(request.status).json({ message: request.message });
    }
    response.status(500).json({ message: request });
});
const start = async () => {
    try {
        app.listen(PORT);
        console.log(`Server is running on port ${PORT}!`);
    }
    catch (err) {
        console.error(`Error on server startup: ${err.message}`);
    }
};
start();
