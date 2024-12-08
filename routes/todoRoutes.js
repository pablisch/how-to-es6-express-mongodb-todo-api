import { Router } from 'express'
const router = Router()

import {
  getAllTodos,
  getTodoById,
  createTodo,
  deleteTodo,
  updateTodo,
} from '../controllers/todoController.js'

router.get('/', getAllTodos)

router.get('/:id', getTodoById)

router.post('/', createTodo)

router.delete('/:id', deleteTodo)

router.patch('/:id', updateTodo)

export default router
