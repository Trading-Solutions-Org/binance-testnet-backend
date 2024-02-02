"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncWrapper = void 0;
const asyncWrapper = (callback) => (req, res, next) => callback(req, res).catch(next);
exports.asyncWrapper = asyncWrapper;
