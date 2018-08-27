<template>
    <div>
      <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
      <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
      <todo-item v-on:delete-todo="deleteTodo"
      v-on:complete-todo="completeTodo" v-for="todo in todos"
      v-bind:todo="todo" :key="todo.id"></todo-item>
    </div>
</template>

<script type = "text/javascript" >

import TodoItem from './TodoItem';

export default {
  props: ['todos'],
  components: {
    TodoItem,
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true;
    },
  },
};
</script>

<style>
</style>
