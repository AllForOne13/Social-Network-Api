"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reactionSchema = new mongoose_1.Schema({
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});
const Reaction = (0, mongoose_1.model)('Reaction', reactionSchema);
exports.default = Reaction;
