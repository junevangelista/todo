<template>
  <v-list flat>
    <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    <v-divider></v-divider>
  </v-list>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";

export default {
  components: {
    TodoListItem,
  },

  props: {
    todos: Array,
  },
};
</script>
