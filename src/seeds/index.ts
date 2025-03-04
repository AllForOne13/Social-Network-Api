import { seedData } from './data';
import { cleanDatabase } from './cleanDB';
import { connectToDatabase } from './../db/database'; // Adjust the path as needed

const seedDatabase = async () => {
  await connectToDatabase();
  await cleanDatabase();
  await seedData();
  console.log('Database seeding complete!');
};

seedDatabase().catch(err => {
  console.error('Error seeding database:', err);
});
