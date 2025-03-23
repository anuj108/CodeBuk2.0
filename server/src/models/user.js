import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
      default: "",
    },
    profilePicture: {
      type: String,
      default: "default-profile-picture-url",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    authToken: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
    codechef: {
      username: String,
      rating: Number,
      problemsSolved: Number,
    },
    codeforces: {
      username: String,
      rating: Number,
      problemsSolved: Number,
    },
    leetcode: {
      username: String, 
      rating: Number,
      problemsSolved: Number,
    },
    gfg: {
      username: String,
      rating: Number,
      problemsSolved: Number,
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    likedPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    commentedPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const User = mongoose.model("User", userSchema);

export default User;