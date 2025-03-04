import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for Friend
interface IFriend extends Document {
  userId: string;
  friendId: string;
}

// Define the Mongoose schema
const FriendSchema: Schema = new Schema({
  userId: { type: String, required: true },
  friendId: { type: String, required: true },
});

// Create the Mongoose model
const Friend = mongoose.model<IFriend>('Friend', FriendSchema);

export default Friend;
