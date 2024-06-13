import ToDoModel from "../models/ToDoModel.js";

export const getToDo = async (req, res) => {
  try {
    const Todo = await ToDoModel.find();
    res.status(200).send(Todo);
  } catch (error) {
    res.status(500).send(error);
  }
}

export const saveToDo = async (req, res) => {
  const { text } = req.body;
  try {
    const newTodo = await ToDoModel.create({ text });
    res.status(201).send(newTodo);
    console.log("Added Successfullyy...");
  } catch (error) {
    res.status(500).send(error);
  }
}

export const deleteToDo = async (req, res) => {
  const { id } = req.params;
  try {
    await ToDoModel.findByIdAndDelete(id);
    res.status(200).send({ message: 'Deleted Successfully' });
    console.log("Deleted Successfullyy...");
  } catch (error) {
    res.status(500).send(error);
  }
};


export const updateToDo = async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    try {
      const updatedTodo = await ToDoModel.findByIdAndUpdate(id, { text }, { new: true });
      res.status(200).send(updatedTodo);
    } catch (error) {
      res.status(500).send(error);
    }
  };