<template>
  <v-list flat>
    <TodoListItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-done-todo="toggleDoneTodo"
      @update:item="updateTodo"
      @date-picked="onDatePicked"
      @delete:item="deleteTodo"
    />
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

  methods: {
    toggleDoneTodo(id) {
      this.$store.commit("TOGGLE_DONE_TODO", id);
    },

    updateTodo(data) {
      this.$store.dispatch("updateTodo", data);
    },

    onDatePicked(data) {
      this.$store.dispatch("datePicked", data);
    },

    deleteTodo(id) {
      this.$store.dispatch("deleteTodo", id);
    },
  },
};
</script>
