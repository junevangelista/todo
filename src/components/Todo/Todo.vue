<template>
  <v-list-item
    @click="toggleDoneTodo(todo.id)"
    :class="{ 'blue lighten-5': todo.done }"
  >
    <template v-slot:default>
      <v-list-item-action>
        <v-checkbox :input-value="todo.done"></v-checkbox>
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title
          :class="{ 'text-decoration-line-through': todo.done }"
          >{{ todo.title }}</v-list-item-title
        >
      </v-list-item-content>

      <v-list-item-action>
        <v-btn icon @click.stop="deleteTodo(todo.id)">
          <v-icon color="red lighten-1">mdi-delete</v-icon>
        </v-btn>
      </v-list-item-action>
    </template>
  </v-list-item>
</template>

<script>
export default {
  props: {
    todo: Object,
  },

  methods: {
    toggleDoneTodo(id) {
      this.$emit("toggle-done-todo", id);
    },

    deleteTodo(id) {
      this.$emit("delete-todo", id);
    },
  },
};
</script>
