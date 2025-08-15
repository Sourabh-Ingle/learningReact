import React, { useState,useEffect } from 'react';
import { TodoContext, ToDoProvider, useTodo } from '../contexts/TodoContext'
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';

const ToDo = () => {
    const [todos, setTodos] = useState([]);

    function addToDo(todo) {
        setTodos(prev => [{ id:Date.now(),...todo },...prev])
    }

    function updatedToDo(id,todo) {
        setTodos((prev)=>prev.map(data=>(data.id===id?todo:data.todo)))
    }
    function deleteToDo(id) {
        setTodos(prev=>prev.filter(data=>(data.id!==id)))
    }
    function toggleComplete(id) {
        setTodos(prev => prev.map(data => (data.id === id ? { ...data, completed:!data.completed } : data)))
    }

    useEffect(() => {
        let storeTodos = JSON.parse(localStorage.getItem("todo"));
        if (storeTodos && storeTodos.length > 0) {
            setTodos(storeTodos);
        }
    }, [])


    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todos))
    }, [todos])
    
    console.log(todos,"app todos")
  return (
      <ToDoProvider value={{ todos, addToDo, updatedToDo, deleteToDo, toggleComplete }}>
          <div className="bg-[#172842] min-h-screen py-8">
              <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                  <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                  <div className="mb-4">
                      {/* Todo form goes here */}
                      <ToDoForm  />
                  </div>
                 
                  <div className="flex flex-wrap gap-y-3">
                      {/*Loop and Add TodoItem here */}
                      {todos.map((todo) => (
                          <div key={todo.id}
                              className='w-full'
                          >
                              <ToDoItem todo={todo} />
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </ToDoProvider>
  )
}

export default ToDo