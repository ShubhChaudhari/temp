import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  uploadFile,
} from "../controllers/user.controller.js";

const router = express.Router();

// Create a new user
router.post('/users', createUser);

// Read all users
router.get('/users', getUsers);

// Read a specific user by ID
router.get('/users/:id', getUserById);

// Update a user by ID
router.put('/users/:id', updateUserById);

// Delete a user by ID
router.delete('/users/:id', deleteUserById);

// Delete a user by ID
router.put('/users/:id/profile-photo', uploadFile);

export default router;
