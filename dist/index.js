"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = require("../src/config/connection"); // Import database connection function
const userRoutes_1 = __importDefault(require("./routes/api/userRoutes"));
const thoughtRoutes_1 = __importDefault(require("./routes/api/thoughtRoutes"));
const reactionRoutes_1 = __importDefault(require("./routes/api/reactionRoutes"));
const friendRoutes_1 = __importDefault(require("./routes/api/friendRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load environment variables from .env
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express_1.default.json());
// Routes
app.use('/api/users', userRoutes_1.default); // userroutes
app.use('/api/thoughts', thoughtRoutes_1.default); // thoughtroutes
app.use('/api/reactions', reactionRoutes_1.default); // reactionroutes
app.use('/api/friends', friendRoutes_1.default); // friendroutes
// Connect to database/ start the server
(0, connection_1.connectToDatabase)()
    .then(() => {
    console.log('Database connected successfully');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
    .catch((error) => {
    console.error('Failed to initialize the app:', error);
});
