import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import chalk from "chalk";
//get User

export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("No such user exists");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
// update a user

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;
  console.log(chalk.bgGreen(currentUserId));
  console.log(chalk.bgGreen(currentUserAdminStatus));

  if (id === currentUserId || currentUserAdminStatus) {
    try {
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access Denied! you can only update your own profile");
  }
};
// Delete user

export const deleteUser = async (req, res) => {
  try {
  } catch (error) {}
};
// Follow a User

export const followUser = async (req, res) => {
  try {
  } catch (error) {}
};
// UnFollow a User

export const UnFollowUser = async (req, res) => {
  try {
  } catch (error) {}
};
