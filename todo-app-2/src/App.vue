<template>
  <div>
    <todo-list v-bind:todos="todos"></todo-list>
    <new-todo-item v-on:add-todo="addTodo"></new-todo-item>
  </div>
</template>

<script>
import TodoList from './components/TodoList';
import NewTodoItem from './components/NewTodoItem';

export default {
  name: 'App',
  components: {
    TodoList,
    NewTodoItem,
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
  data() {
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true,
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }],
    };
  },
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
