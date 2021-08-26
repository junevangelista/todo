<template>
  <div class="todo">
    <add-todo></add-todo>
    <list-todos v-if="todos.length" :todos="todos"></list-todos>
    <empty-todos v-else></empty-todos>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddTodo from "../components/Todo/AddTodo.vue";
import ListTodos from "../components/Todo/ListTodos.vue";
import EmptyTodos from "../components/Todo/EmptyTodos.vue";

export default {
  components: {
    AddTodo,
    ListTodos,
    EmptyTodos,
  },

  computed: {
    ...mapState({
      todos: (state) => state.todos,
    }),
  },
};
</script>
