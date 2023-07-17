<script setup lang="ts">
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'
</script>

<template>
  <main>
    <a-typography-title>Todo List</a-typography-title>
    <a-row justify="center">
      <a-col :span="8">
        <TodoForm />
        <TodoList />
      </a-col>
    </a-row>
  </main>
</template>
