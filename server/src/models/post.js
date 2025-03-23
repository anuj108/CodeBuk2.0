import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      index: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    postImage: {
      type: String,
      required: true,
    },
    profilePhoto: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("post", postSchema);
export default Post;
