import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/social_network';

  try {
    await mongoose.connect(dbUri); // No need for additional options in newer Mongoose versions
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw error; // Rethrow the error to handle it in the caller function
  }
};

