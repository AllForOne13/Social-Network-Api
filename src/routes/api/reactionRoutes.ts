import { Request, Response } from 'express';
import Reaction from '../../models/Reaction';

// Create new reaction
export const createReaction = async (req: Request, res: Response): Promise<void> => {
  try {
    const reaction = new Reaction(req.body);
    await reaction.save();
    res.status(201).json(reaction); // Sending response
  } catch (err) {
    const error = err as Error;
    res.status(400).json({ error: error.message }); // Sending error response
  }
};

// Delete reaction
export const deleteReaction = async (req: Request, res: Response): Promise<void> => {
  try {
    const reaction = await Reaction.findByIdAndDelete(req.params.id);
    if (!reaction) {
      res.status(404).json({ message: 'Reaction not found' }); // Sending error response if reaction is not found
      return;
    }
    res.status(200).json({ message: 'Reaction deleted', reaction }); // Sending successful response
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: error.message }); // Sending error response
  }
};

// Get all reactions
export const getReactions = async (req: Request, res: Response): Promise<void> => {
  try {
    const reactions = await Reaction.find({});
    res.status(200).json(reactions); // Sending successful response
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: error.message }); // Sending error response
  }
};
