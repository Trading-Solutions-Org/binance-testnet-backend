"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const async_wrapper_1 = require("../../shared/utils/async-wrapper");
const router = express_1.default.Router();
const TELEGRAM_TOKEN = '6941688271:AAH6QpVwM1UKhWafv5tUtYx8D8zflaU8s0E';
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;
const TELEGRAM_CHAT_ID = '537057649';
router.post('/alert', (0, async_wrapper_1.asyncWrapper)(async (request, response) => {
    const { ticker, type, price } = request.body;
    const message = { type, ticker, price };
    const url = `${TELEGRAM_API}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${JSON.stringify(message)}`;
    await axios_1.default.get(url);
    console.log(message);
    response.status(200).json({ message });
}));
exports.default = router;
