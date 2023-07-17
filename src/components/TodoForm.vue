<script setup lang="ts">
import { ref, watch } from 'vue'
import { useTodoStore } from '../stores/todo'
import { storeToRefs } from 'pinia'

const inputValue = ref<string>('')

const { todoDetail } = storeToRefs(useTodoStore())
const { addTodo, setTodoDetail } = useTodoStore()
const isEdit = Object.keys(todoDetail).length

const handleAddTodo = (todoName: string) => {
  const todo = {
    id: Date.now(),
    name: todoName,
    complete: false
  }
  addTodo(todo)
  inputValue.value = ''
  setTodoDetail({})
}
</script>

<template>
  <a-input-search
    :input="isEdit ? todoDetail.name : inputValue"
    placeholder="Enter your todo"
    :enter-button="isEdit ? 'Save' : 'Add'"
    size="large"
    @search="handleAddTodo"
  />
</template>

<style scoped>
span {
  margin-bottom: 10px;
}
</style>
