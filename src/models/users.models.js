import mongoose from "mongoose";
const { Schema, model } = mongoose;

const usersSxhema = new Schema({
  name: {
    type: String,
    requird: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 5,
    max: 15,
  },
});

export default model("users", usersSxhema);
