"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes_1 = __importDefault(require("./api/userRoutes"));
const thoughtRoutes_1 = __importDefault(require("./api/thoughtRoutes"));
const router = (0, express_1.Router)();
router.use('/api/users', userRoutes_1.default);
router.use('/api/thoughts', thoughtRoutes_1.default);
router.use((req, res) => {
    res.status(404).send('Wrong route!');
});
exports.default = router;
