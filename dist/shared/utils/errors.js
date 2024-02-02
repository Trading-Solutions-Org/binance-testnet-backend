"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidCredentialsError = exports.ValidationError = exports.InvalidRequestError = exports.AppError = void 0;
// eslint-disable-next-line max-classes-per-file
class AppError extends Error {
    constructor(message) {
        super(message);
        this.status = 500;
    }
}
exports.AppError = AppError;
class InvalidRequestError extends AppError {
    constructor(message = 'Invalid request', status = 400) {
        super(message);
        this.status = status;
    }
}
exports.InvalidRequestError = InvalidRequestError;
class ValidationError extends AppError {
    constructor(message = 'Invalid data') {
        super(message);
        this.status = 400;
    }
}
exports.ValidationError = ValidationError;
class InvalidCredentialsError extends AppError {
    constructor(message = 'Invalid credentials') {
        super(message);
        this.status = 401;
    }
}
exports.InvalidCredentialsError = InvalidCredentialsError;
