
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

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

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social_network', {})
  .then(() => {
    console.log('MongoDB connected successfully');
    
    // Start the server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err: any) => {
    console.error('Failed to connect to MongoDB', err);
  });
