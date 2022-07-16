import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";
import UserModel from "../Models/userModel.js";

// Creat new Post

export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);
  try {
    await newPost.save();
    res.status(200).json("Post created!");
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get a post

export const getPost = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a post

export const updatePost = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a post

export const deletePost = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
};
// like/dislike a post

export const likePost = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
};
// Get Timeline POsts

export const getTimelinePosts = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
};
