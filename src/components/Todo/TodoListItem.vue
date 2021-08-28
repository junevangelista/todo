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
          <TodoListItemMenu
            @update:item="showEditDialog"
            @delete:item="showDeleteDialog"
          />
          <!-- <v-btn icon @click.stop="confirmDelete(todo.id)">
            <v-icon color="red lighten-1">mdi-delete</v-icon>
          </v-btn> -->
        </v-list-item-action>
      </template>
    </v-list-item>
    <DialogEdit
      v-if="dialogs.edit"
      :todo="todo"
      @on-update="onUpdate"
      @cancel-update="cancelUpdate"
    />
    <DialogDelete
      v-if="dialogs.delete"
      @on-delete="onDelete"
      @cancel-delete="cancelDelete"
    />
  </div>
</template>

<script>
import TodoListItemMenu from "./TodoListItemMenu.vue";
import DialogEdit from "../Dialog/DialogEdit.vue";
import DialogDelete from "../Dialog/DialogDelete.vue";

export default {
  props: {
    todo: Object,
  },

  components: {
    TodoListItemMenu,
    DialogEdit,
    DialogDelete,
  },

  data() {
    return {
      dialogs: {
        edit: false,
        delete: false,
      },
    };
  },

  methods: {
    showEditDialog() {
      this.dialogs.edit = true;
    },

    showDeleteDialog() {
      this.dialogs.delete = true;
    },

    toggleDoneTodo(id) {
      this.$emit("toggle-done-todo", id);
    },

    cancelUpdate() {
      this.dialogs.edit = false;
    },

    cancelDelete() {
      this.dialogs.delete = false;
    },

    onDelete() {
      this.$emit("delete:item", this.todo.id);
    },

    onUpdate(title) {
      const data = {
        id: this.todo.id,
        title,
      };
      this.$emit("update:item", data);

      this.dialogs.edit = false;
    },
  },
};
</script>
