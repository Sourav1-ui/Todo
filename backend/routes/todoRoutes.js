import express from "express";

import{getTodos,saveTodos,updateTodos,deleteTodos} from "../controller/todoController.js"

const router=express.Router();

router.get('/get',getTodos);
router.post('/save',saveTodos);
router.put('/update/:id',updateTodos); 
router.delete('/delete/:id',deleteTodos);
export default router;

