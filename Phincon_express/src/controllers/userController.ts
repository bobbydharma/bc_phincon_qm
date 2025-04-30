import { Request, Response } from "express";
import userService from "../services/userService";

export const getUsers = (req: Request, res: Response) => {
  const users = userService.getAllUsers();
  if (!users || users.length === 0) {
    res.status(404).json({ message: "No users found" });
    return;
  }
  res.json(users);
};

export const getUser = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = userService.getUserById(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

export const createUser = (req: Request, res: Response) => {
  const newUser = req.body;
  userService.createUser(newUser);
  res.status(201).json({ message: "User created", user: newUser });
};

export const updateUser = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  const success = userService.updateUser(id, updatedData);
  if (success) {
    res.json({ message: "User updated" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

export const deleteUser = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const success = userService.deleteUser(id);
  if (success) {
    res.json({ message: "User deleted" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
