import mongoose from 'mongoose'; // Add this import for mongoose
import { connectToDatabase } from '../config/connection'; // Ensure the correct path
import { seedData } from './data';
import { cleanDatabase } from './cleanDB';

console.log('Current Working Directory:', process.cwd());

try {
  console.log('Resolved Paths:', {
    seedData: require.resolve('./data'),
    cleanDatabase: require.resolve('./cleanDB'),
    connectToDatabase: require.resolve('../config/connection'),
  });
} catch (err) {
  console.error('Error resolving paths:', err);
}

const seedDatabase = async () => {
  try {
    // Centralized database connection logic
    await connectToDatabase();
    console.log('Database connected. Starting seeding process...');

    // Clean the database
    console.log('Cleaning the database...');
    await cleanDatabase();

    // Seed the database with data
    console.log('Seeding the database...');
    await seedData();

    console.log('Seeding process completed successfully!');
  } catch (err) {
    console.error('Error during the seeding process:', err);
  } finally {
    // Close the connection after completion
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
      console.log('Database connection closed.');
    }
  }
};

// Call the function to begin the seeding process
seedDatabase();
