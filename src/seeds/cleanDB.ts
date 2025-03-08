import { User, Thought, Reaction } from '../../src/models'; // Adjusted the path

export const cleanDatabase = async () => {
  try {
    console.log('Cleaning database collections...');

    // Clear the collections
    await User.deleteMany({});
    await Thought.deleteMany({});
    await Reaction.deleteMany({});

    console.log('Database cleaned!');
  } catch (error) {
    console.error('Error cleaning the database:', error);
    throw error;
  }
};
