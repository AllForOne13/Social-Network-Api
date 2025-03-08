"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Friend = exports.Reaction = exports.Thought = exports.User = void 0;
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const userRoutes_1 = __importDefault(require("../routes/api/userRoutes"));
const postRoutes_1 = __importDefault(require("../routes/api/postRoutes"));
const User_1 = __importDefault(require("./User"));
exports.User = User_1.default;
const Thought_1 = __importDefault(require("./Thought"));
exports.Thought = Thought_1.default;
const Reaction_1 = __importDefault(require("./Reaction"));
exports.Reaction = Reaction_1.default;
const Friend_1 = __importDefault(require("./Friend"));
exports.Friend = Friend_1.default;
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use((0, morgan_1.default)('dev'));
// Routes
app.use('/api/users', userRoutes_1.default);
app.use('/api/posts', postRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Welcome to the Social Network API!');
});
// Connect to MongoDB
mongoose_1.default.connect(process.env.MONGODB_URI || 'mongodb://localhost/social_network', {})
    .then(() => {
    console.log('MongoDB connected successfully');
    // Start the server
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
})
    .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});
