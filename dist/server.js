"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoutes_1 = __importDefault(require("./routes/api/userRoutes"));
const thoughtRoutes_1 = __importDefault(require("./routes/api/thoughtRoutes"));
const reactionRoutes_1 = __importDefault(require("./routes/api/reactionRoutes"));
const friendRoutes_1 = __importDefault(require("./routes/api/friendRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use('/api/users', userRoutes_1.default);
app.use('/api/thoughts', thoughtRoutes_1.default);
app.use('/api/reactions', reactionRoutes_1.default);
app.use('/api/friends', friendRoutes_1.default);
mongoose_1.default.connect('mongodb://localhost:27017/social_network_db', {});
mongoose_1.default.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
