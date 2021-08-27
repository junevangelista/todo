<template>
  <v-list flat>
    <todo
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-done-todo="toggleDoneTodo"
      @delete-todo="deleteTodo"
    ></todo>
    <v-divider></v-divider>
  </v-list>
</template>

<script>
import Todo from "./Todo.vue";

export default {
  components: {
    Todo,
  },

  props: {
    todos: Array,
  },

  methods: {
    toggleDoneTodo(id) {
      this.$store.commit("TOGGLE_DONE_TODO", id);
    },

    deleteTodo(id) {
      this.$store.dispatch("deleteTodo", id);
    },
  },
};
</script>
