import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface ITodo {
  id: number
  name: string
  complete: boolean
}

const todoListStorage = localStorage.getItem('todoList')
  ? JSON.parse(localStorage.getItem('todoList') as string)
  : []

export const useTodoStore = defineStore('todo', () => {
  const todoDetail = ref<ITodo>({} as ITodo)
  const todoList = ref<ITodo[]>(todoListStorage)

  function setTodoDetail(todo: ITodo) {
    todoDetail.value = todo
  }
  function addTodo(todo: ITodo) {
    todoList.value.push(todo)
    localStorage.setItem('todoList', JSON.stringify(todoList.value))
  }
  function editTodo(newTodo: ITodo) {
    todoList.value = todoList.value.map((todo) => {
      if (todo.id === newTodo.id) return newTodo
      return todo
    })
    localStorage.setItem('todoList', JSON.stringify(todoList.value))
  }
  function deleteTodo(todoId: ITodo['id']) {
    todoList.value = todoList.value.filter((todo) => todo.id !== todoId)
    localStorage.setItem('todoList', JSON.stringify(todoList.value))
  }

  return { todoDetail, todoList, setTodoDetail, addTodo, editTodo, deleteTodo }
})
