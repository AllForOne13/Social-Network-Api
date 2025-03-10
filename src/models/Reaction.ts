import { Schema, model } from 'mongoose';

const reactionSchema = new Schema({
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
}, {
  toJSON: {
    virtuals: true,
  },
  id: false,
});

const Reaction = model('Reaction', reactionSchema);

export default Reaction;
