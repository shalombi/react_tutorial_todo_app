import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'

export const todoService = {
    getById,
    query,
    remove,
    getTasks,
    getNextTodoId,
    save,
    getEmptyTodo,
}

const KEY = 'todosDB'
var gTodos = ['wash the dishes', 'Taking out the trash', 'to travel', 'take a trip to America']

function query(filterBy) {
    let todos = _loadFromStorage()
    if (!todos || !todos.length) {
        todos = _createTodos()
        _saveToStorage(todos)
    }

    if (filterBy) {
        let { task } = filterBy

        console.log('task:', task)
        todos = todos.filter(todo => (
            todo.task.includes(task)

        ))
    }

    return Promise.resolve(todos)
}

function getById(todoId) {
    if (!todoId) return Promise.resolve(null)
    const todos = _loadFromStorage()
    const todo = todos.find(todo => todoId === todo._id)
    return Promise.resolve(todo)
}

function getNextTodoId(todoId) {
    let todos = _loadFromStorage()
    const todoIdx = todos.findIndex(todo => todo._ === todoId)
    const nextTodoIdx = todoIdx + 1 === todos.length ? 0 : todoIdx + 1
    return todos[nextTodoIdx]._
}

function remove(todoId) {
    let todos = _loadFromStorage()
    todos = todos.filter(todo => todo._id !== todoId)
    _saveToStorage(todos)
    return Promise.resolve()
}

function save(todo) {
    if (todo._id) return _update(todo)
    else return _add(todo)
}

function _add(todo) {
    console.log(todo)
    let todos = _loadFromStorage()
    const newTodo = _createTodo(todo.task, todo.isDone)
    todos = [newTodo, ...todos]
    _saveToStorage(todos)
    return Promise.resolve(newTodo)
}

function _update(todoToUpdate) {
    let todos = _loadFromStorage()
    todos = todos.map(todo => todo._id === todoToUpdate._id ? todoToUpdate : todo)
    _saveToStorage(todos)
    return Promise.resolve(todoToUpdate)
}

function getTasks() {
    return gTodos
}

function _createTodo(task, isDone) {
    return {
        _id: utilService.makeId(),
        task,
        desc: utilService.makeLorem(),
        isDone
    }
}

function _createTodos() {
    const todos = []
    for (let i = 0; i < 5; i++) {
        const task = gTodos[utilService.getRandomIntInclusive(0, gTodos.length - 1)]
        todos.push(_createTodo(task))
    }
    return todos
}

function _saveToStorage(todos) {
    storageService.saveToStorage(KEY, todos)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

function getEmptyTodo() {
    return {
        isDone: false,
        desc: utilService.makeLorem(),
    }
}
