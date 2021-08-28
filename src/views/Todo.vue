<template>
  <div class="todo">
    <TodoAddItem />
    <TodoList v-if="todos.length" :todos="todos" />
    <TodoEmpty v-else />
  </div>
</template>

<script>
import { mapState } from "vuex";
import TodoAddItem from "../components/Todo/TodoAddItem.vue";
import TodoList from "../components/Todo/TodoList.vue";
import TodoEmpty from "../components/Todo/TodoEmpty.vue";

export default {
  components: {
    TodoAddItem,
    TodoList,
    TodoEmpty,
  },

  computed: {
    ...mapState({
      todos: (state) => state.todos,
    }),
  },
};
</script>
