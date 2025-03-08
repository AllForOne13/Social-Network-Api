  import { User, Thought, Reaction, Friend } from '../../src/models'; // Adjust the path as needed

  interface IUser {
    // Define the properties of a user here
    username: string;
    email: string;
    // Add other properties as needed
  }

  interface IThought {
    // Define the properties of a thought here
    thoughtText: string;
    username: string;
    // Add other properties as needed
  }

  interface IReaction {
    // Define the properties of a reaction here
    reactionBody: string;
    username: string;
    // Add other properties as needed
  }

  interface IFriend {
    // Define the properties of a friend here
    userId: string;
    friendId: string;
    // Add other properties as needed
  }

  export const seedData = async () => {
    const users: IUser[] = [
      // Add your sample user data here
    ];

    const thoughts: IThought[] = [
      // Add your sample thoughts data here
    ];

    const reactions: IReaction[] = [
      // Add your sample reactions data here
    ];

    const friends: IFriend[] = [
      // Add your sample friends data here
    ];

    // Insert data into the database
    await User.insertMany(users);
    await Thought.insertMany(thoughts);
    await Reaction.insertMany(reactions);
    await Friend.insertMany(friends);

    console.log('Data seeding complete!');
  };
