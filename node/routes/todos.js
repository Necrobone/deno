const express = require('express');

const Router = express.Router();

let todos = [];

Router.get('/todos', (request, response, next) => {
    response.json({todos: todos});
});

Router.post('/todos', (request, response, next) => {
    const todo = {id: new Date().toISOString(), text: request.body.text};
    todos.push(todo);
    response.status(201).json({message: 'Todo created!', todo});
});

Router.put('/todos/:id', (request, response, next) => {
    const id = request.params.id;
    const index = todos.findIndex(todo => {
        return todo.id === id;
    });

    todos[index] = { id: todos[index].id, text: request.body.text}
    response.status(200).json({message: 'Todo updated!', todo: todos[index]});
});

Router.delete('/todos/:id', (request, response, next) => {
    const id = request.params.id;
    todos = todos.filter(todo => {
        return todo.id !== id;
    });

    response.status(200).json({message: 'Todo deleted!'});
});

module.exports = Router;
