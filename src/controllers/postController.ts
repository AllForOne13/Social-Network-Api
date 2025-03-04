import { Request, Response } from 'express';
import Post from '../models/Post'; 

// Create a post
export const createPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post); 
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ error: err.message }); 
  }
};

// Delete post
export const deletePost = async (req: Request, res: Response): Promise<void> => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      res.status(404).json({ message: 'Post not found' }); 
      return;
    }
    res.status(200).json({ message: 'Post deleted', post }); 
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message }); }
};

// Get all posts
export const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message }); 
  }
};
