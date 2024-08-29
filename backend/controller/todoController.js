import TodoModels from "../models/TodoModels.js";
//get 
export const getTodos= async(req,res)=>{
    //return all todo
    const toDos=await TodoModels.find()
    res.send(toDos)
}

//post todo

/*export const saveTodos= (req,res)=>{
    const{toDo}=req.body
    TodoModels.create({toDo})
    .then(data=>{
        console.log("Save Successfully")
        res.status(201).send(data)
    })
    .catch((err)=>console.log(err));
}*/

export const saveTodos= async(req,res)=>{
    try {
        const { toDo } = req.body;
        const newTodo = await TodoModels.create({ toDo });
        console.log("Save Successfully");
        //send responce in frontend
        res.status(201).send(newTodo);
        // console.log(newTodo)
    } 
    catch (err) {
        console.log(err);
        res.status(500).send("Error while saving todo");
    }
}

//update todo

/*export const updateTodos = (req, res) => {
    const { toDo } = req.body;
    const { id } = req.params;

    TodoModels.findByIdAndUpdate(id, { toDo })
        .then(() => {
            res.send("Update Successfully...");
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error while updating todo");
        });
};*/
 
export const updateTodos = async (req, res) => {
    try {
        const { toDo } = req.body;
        const { id } = req.params;
        const newTodo = await TodoModels.findByIdAndUpdate(id, { toDo });
        if (!newTodo) {
            return res.status(404).send("Todo not found");
        }
        res.status(200).send({ message: "Todo updated successfully", todo: newTodo });
        console.log(newTodo);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error while updating todo");
    }
};

//delete todo

export const deleteTodos= (req,res)=>{
    const { id } = req.params; // Assuming id is passed in the request body
    TodoModels.findByIdAndDelete(id)
    .then(()=>{
        res.send("Deleted Succesfully..")
    })
    .catch((err)=>{
        console.log(err)
        res.status({error:err , messsage:"Error while deleting todo"});
     });
}






