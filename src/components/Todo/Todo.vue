<template>
  <div>
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
          <todo-menu></todo-menu>
          <!-- <v-btn icon @click.stop="confirmDelete(todo.id)">
            <v-icon color="red lighten-1">mdi-delete</v-icon>
          </v-btn> -->
        </v-list-item-action>
      </template>
    </v-list-item>
    <dialog-delete
      v-if="dialogs.delete"
      @on-delete="deleteTodo"
      @cancel-delete="cancelDelete"
    ></dialog-delete>
  </div>
</template>

<script>
import TodoMenu from "./TodoMenu.vue";
import DialogDelete from "../Dialog/DialogDelete.vue";

export default {
  props: {
    todo: Object,
  },

  components: {
    TodoMenu,
    DialogDelete,
  },

  data() {
    return {
      dialogs: {
        delete: false,
      },
    };
  },

  methods: {
    toggleDoneTodo(id) {
      this.$emit("toggle-done-todo", id);
    },

    confirmDelete() {
      this.dialogs.delete = true;
    },

    cancelDelete() {
      this.dialogs.delete = false;
    },

    deleteTodo() {
      this.$emit("delete-todo", this.todo.id);
    },
  },
};
</script>
