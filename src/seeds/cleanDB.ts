import { User, Thought, Reaction } from '../../src/models'; // Adjusted the path

export const cleanDatabase = async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});
  await Reaction.deleteMany({});
  
  console.log('Database cleaned!');
};
