import { Router } from 'express'
const router = Router()

import todoController  from '../controllers/todoController.js'

router.get('/', todoController.getAllTodos)

router.get('/:id', todoController.getTodoById)

router.post('/', todoController.createTodo)

router.delete('/:id', todoController.deleteTodo)

router.patch('/:id', todoController.updateTodo)

export default router
