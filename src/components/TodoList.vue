<script setup lang="ts">
import { FormOutlined, DeleteOutlined } from '@ant-design/icons-vue'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../stores/todo'

const { todoList } = storeToRefs(useTodoStore())
const { setTodoDetail, editTodo, deleteTodo } = useTodoStore()
</script>

<template>
  <a-list size="small" bordered :data-source="todoList">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-checkbox v-model:checked="item.complete" @change="() => editTodo(item)">
          {{ item.name }}
        </a-checkbox>
        <template #actions>
          <form-outlined :style="{ color: 'blue' }" @click="() => setTodoDetail(item)" />
          <delete-outlined :style="{ color: 'red' }" @click="() => deleteTodo(item.id)" />
        </template>
      </a-list-item>
    </template>
  </a-list>
</template>
