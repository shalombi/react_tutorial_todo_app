import { useState, useEffect, useRef } from "react"
import { Edit } from "../cmps/edit"
import { FilterBy } from "../cmps/filterBy"
import { List } from "../cmps/list"
import { storageService } from "../services/storage.service"
import { todoService } from "../services/todo.service"


export const TodoApp = () => {

    const [todos, setTodos] = useState('')


    useEffect(() => {
        loadTodos()
    }, [])


    const loadTodos = async (filterBy) => {
        const todos = await todoService.query(filterBy)
        // console.log('todos:',todos)
        setTodos(todos)


    }
    // C - V
    // R - V
    // U 
    // D - V

    // Filtering

    const onRemove = async (todoId) => {
        console.log('remove...')
        console.log('todoId:', todoId)
        await todoService.remove(todoId)

        const newTodos = todos.filter(todo => todo._id !== todoId)
        setTodos(newTodos)
    }

    const onAddTodo = async (todo) => {
        console.log('onAddTodo...')
        const newTodo = await todoService.save(todo)
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
    }

    const onFilterBy = (filterBy)=>{
    //    if(ev) ev.preventDefault()
        loadTodos(filterBy)
    }
    return (
        <section className="todo-app">
            <h1>todo app</h1>
            <FilterBy onFilterBy={onFilterBy} />
            <List onRemove={onRemove} todos={todos} />
            <Edit onAddTodo={onAddTodo} />
        </section>
    )

}
