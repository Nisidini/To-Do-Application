import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    }
});

const task = mongoose.model("todo", todoSchema )

export default task;


