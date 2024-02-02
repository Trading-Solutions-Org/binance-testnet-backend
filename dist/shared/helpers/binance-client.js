"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binanceClient = void 0;
const connector_typescript_1 = require("@binance/connector-typescript");
exports.binanceClient = new connector_typescript_1.Spot(process.env.BINANCE_API_KEY, process.env.BINANCE_API_KEY_SECRET, { baseURL: process.env.BINANCE_API_BASE_URL });
