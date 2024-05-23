import mongoose from "mongoose";
const { Schema, model} = mongoose;

const tasksSxhema = new Schema({
    title: {
        type: String,
        requird: true 
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type : Schema.Types.ObjectId,
        ref : "users"
    }
});

export default model("tasks", tasksSxhema);
