import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import { connectToDatabase } from '../config/connection'; // Centralized connection logic
import userRoutes from '../routes/api/userRoutes';
import postRoutes from '../routes/api/postRoutes';

import User from './User';
import Thought from './Thought';
import Reaction from './Reaction';
import Friend from './Friend';

export {
  User,
  Thought,
  Reaction,
  Friend,
};

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Social Network API!');
});

const main = async () => {
  try {
    // Use the centralized connectToDatabase function
    await connectToDatabase();
    console.log('MongoDB connected successfully. Starting the server...');

    // Start the server after a successful database connection
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB or start the server', err);
    process.exit(1); // Exit the process on failure
  }
};

main(); // Call the main function
