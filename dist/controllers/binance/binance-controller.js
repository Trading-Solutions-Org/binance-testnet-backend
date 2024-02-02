"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const async_wrapper_1 = require("../../shared/utils/async-wrapper");
const binance_client_1 = require("../../shared/helpers/binance-client");
const errors_1 = require("../../shared/utils/errors");
const router = express_1.default.Router();
router.get('/account', (0, async_wrapper_1.asyncWrapper)(async (request, response) => {
    const { query } = request.query;
    const account = await binance_client_1.binanceClient.accountInformation(query);
    if (!account)
        throw new errors_1.AppError('Binance client failure');
    response.status(200).json(account);
}));
router.get('/allOrders', (0, async_wrapper_1.asyncWrapper)(async (request, response) => {
    const { symbol, ...options } = request.query;
    const allOrders = await binance_client_1.binanceClient.allOrders(symbol, options);
    if (!allOrders)
        throw new errors_1.AppError('Binance client failure');
    response.status(200).json(allOrders);
}));
router.get('/openedOrders', (0, async_wrapper_1.asyncWrapper)(async (request, response) => {
    const { query } = request;
    const openOrders = await binance_client_1.binanceClient.currentOpenOrders(query);
    if (!openOrders)
        throw new errors_1.AppError('Binance client failure');
    response.status(200).json(openOrders);
}));
exports.default = router;
