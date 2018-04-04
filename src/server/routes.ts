import { Express, Router } from 'express';
import * as shortId from 'shortid';
import { Todo } from 'models/todos';

const router = Router();

router.get('/new-todo', (req, res) => {
  const newTodo: Todo = {
    id: shortId(),
    text: 'Remember to work on the API',
    completed: false
  };

  res.json(newTodo);
});

export default (app: Express) => {
  app.use('/api', router);
};
