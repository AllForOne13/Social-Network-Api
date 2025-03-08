import express from 'express'; // Assuming you're using Express
import { connectToDatabase } from './config/connection'; // Centralized connection logic

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (if any)
app.use(express.json()); // For parsing JSON
// Add other middlewares here as needed, e.g., app.use(cors());

const main = async () => {
  try {
    // Connect to the database using the centralized logic
    await connectToDatabase();
    console.log('Database connected successfully. Starting the server...');

    // Define your routes here
    app.get('/', (req, res) => {
      res.send('Hello, World! Your API is running.');
    });

    // Initialize server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error initializing the application:', error);
    process.exit(1); // Exit the application if initialization fails
  }
};

// Call the main function to start the app
main();
