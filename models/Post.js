const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    categories: {
      type: Array,
      required: false,
    },
    likes: {
      type: Array,
      default: [],
    },
    comments: [
   {
    comment: {
      type: String,
      required: true,
    },
   }
    ]
  }
);

module.exports = mongoose.model("Post", PostSchema);