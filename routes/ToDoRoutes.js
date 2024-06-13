import express from 'express';
import { getToDo, saveToDo, deleteToDo,  updateToDo  } from "../controllers/ToDoController.js";

const router = express.Router();

router.route("/get-todo").get(getToDo);
router.route("/save-todo").post(saveToDo);
router.route("/delete-todo/:id").delete(deleteToDo); 
router.route("/update-todo/:id").put(updateToDo);

export default router;
