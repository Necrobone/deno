import {Router} from "https://deno.land/x/oak/mod.ts";

const router = new Router();

interface Todo {
    id: string,
    text: string
}

let todos: Todo[] = [];

router.get('/todos', (context) => {
    context.response.body = {todos};
});

router.post('/todos', async (context) => {
    const data = await context.request.body().value;
    const todo: Todo = {
        id: new Date().toISOString(),
        text: data.text
    };

    todos.push(todo);

    context.response.body = {message: 'Created Todo!', todo: todo}
});

router.put('/todos/:id', async (context) => {
    const id = context.params.id;
    const data = await context.request.body().value;
    const index = todos.findIndex(todo => {
       return todo.id === id;
    });

    todos[index].text = data.text;

    context.response.body = { message: 'Updated Todo!', todo: todos[index] };
});

router.delete('/todos/:id', (context) => {
    const id = context.params.id;
    todos = todos.filter(todo => {
        return todo.id !== id;
    });

    context.response.body = { message: 'Deleted todo' };
});

export default router;
