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
exports.removeReaction = exports.addReaction = exports.deleteThought = exports.updateThought = exports.createThought = exports.getSingleThought = exports.getThoughts = void 0;
const Thought_1 = __importDefault(require("../models/Thought"));
// Get all thoughts
const getThoughts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const thoughts = yield Thought_1.default.find();
        res.json(thoughts);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.getThoughts = getThoughts;
// Get single thought by ID
const getSingleThought = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const thought = yield Thought_1.default.findById(req.params.thoughtId);
        if (!thought) {
            res.status(404).json({ message: 'Thought not found' });
            return;
        }
        res.json(thought);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.getSingleThought = getSingleThought;
// Create new thought
const createThought = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const thought = yield Thought_1.default.create(req.body);
        res.json(thought);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.createThought = createThought;
// Update thought by ID
const updateThought = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const thought = yield Thought_1.default.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
        if (!thought) {
            res.status(404).json({ message: 'Thought not found' });
            return;
        }
        res.json(thought);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.updateThought = updateThought;
// Delete thought by ID
const deleteThought = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const thought = yield Thought_1.default.findByIdAndDelete(req.params.thoughtId);
        if (!thought) {
            res.status(404).json({ message: 'Thought not found' });
            return;
        }
        res.json({ message: 'Thought deleted' });
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.deleteThought = deleteThought;
// Add reaction to a thought
const addReaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const thought = yield Thought_1.default.findByIdAndUpdate(req.params.thoughtId, { $addToSet: { reactions: req.body } }, { new: true });
        if (!thought) {
            res.status(404).json({ message: 'Thought not found' });
            return;
        }
        res.json(thought);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.addReaction = addReaction;
// Remove reaction from a thought
const removeReaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const thought = yield Thought_1.default.findByIdAndUpdate(req.params.thoughtId, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true });
        if (!thought) {
            res.status(404).json({ message: 'Thought not found' });
            return;
        }
        res.json(thought);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.removeReaction = removeReaction;
