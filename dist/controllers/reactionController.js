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
exports.getReactions = exports.deleteReaction = exports.createReaction = void 0;
const Reaction_1 = __importDefault(require("../models/Reaction"));
// Create new reaction
const createReaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reaction = new Reaction_1.default(req.body);
        yield reaction.save();
        res.status(201).json(reaction); // Sending response
    }
    catch (err) {
        const error = err;
        res.status(400).json({ error: error.message }); // Sending error response
    }
});
exports.createReaction = createReaction;
// Delete reaction
const deleteReaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reaction = yield Reaction_1.default.findByIdAndDelete(req.params.id);
        if (!reaction) {
            res.status(404).json({ message: 'Reaction not found' }); // Sending error response if reaction is not found
            return;
        }
        res.status(200).json({ message: 'Reaction deleted', reaction }); // Sending successful response
    }
    catch (err) {
        const error = err;
        res.status(500).json({ error: error.message }); // Sending error response
    }
});
exports.deleteReaction = deleteReaction;
// Get all reactions
const getReactions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reactions = yield Reaction_1.default.find({});
        res.status(200).json(reactions); // Sending successful response
    }
    catch (err) {
        const error = err;
        res.status(500).json({ error: error.message }); // Sending error response
    }
});
exports.getReactions = getReactions;
