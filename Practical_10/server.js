const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
let todos = [];
app.get('/', (req, res) => {    
    res.send(todos).status(200);
});

app.post('/add', (req, res) => {
    const todo = req.body.todo;
    // todo = JSON.parse(todo);
    if (!todo) {
        return res.status(400).send('Todo is required');
    }
    console.log(todo);

    todos.push(todo);
    res.status(201).send(todos);
});

app.delete('/delete', (req, res) => {
    const todo = req.body.todo;
    if (!todo) {
        return res.status(400).send('Todo is required');
    }
    todos = todos.filter(t => t !== todo);
    res.status(200).send(todos);
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}   );