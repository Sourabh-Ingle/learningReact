import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "",
            completed:false
        }
    ],
    addToDo: (todo) => { },
    updatedToDo: (todo, id) => { },
    deleteToDo: (id) => { },
    toggleComplete:(id)=>{}
});

export const ToDoProvider = TodoContext.Provider;


export const useTodo = () => {
    return useContext(TodoContext);
}
