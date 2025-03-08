import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

const connection = {
  uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetworkDB',
};

let isConnected = false; // Track connection state

export const connectToDatabase = async (): Promise<void> => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log('Already connected to the database');
      return; // Skip connecting again
    }

    if (!isConnected) {
      await mongoose.connect(connection.uri);
      isConnected = true; // Flag as connected
      console.log('Connected to the database successfully');
    }
  } catch (error) {
    console.error('Failed to connect to the database', error);
    throw error;
  }
};

// Mongoose connection event listeners
const db = mongoose.connection;

db.on('error', (error) => console.error('Database connection error:', error));
db.once('open', () => {
  console.log('Database connection is open');
});

export default db;
