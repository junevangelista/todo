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

        <v-list-item-action v-if="todo.dueDate">
          <v-list-item-action-text
            ><v-icon prop>mdi-calendar</v-icon>
            {{ todo.dueDate | formattedDate }}</v-list-item-action-text
          >
        </v-list-item-action>

        <v-list-item-action>
          <TodoListItemMenu
            @update:item="showEditDialog"
            @dueDate:item="showDatePickerDialog"
            @delete:item="showDeleteDialog"
          />
        </v-list-item-action>
      </template>
    </v-list-item>
    <DialogEdit
      v-if="dialogs.edit"
      :todo="todo"
      @update:item="onUpdate"
      @cancel="cancelUpdate"
    />
    <DialogDatePicker
      v-if="dialogs.dueDate"
      :date="todo.dueDate"
      @date-picked="onDatePicked"
      @cancel="cancelDatePicker"
    />
    <DialogDelete
      v-if="dialogs.delete"
      @delete:item="onDelete"
      @cancel="cancelDelete"
    />
  </div>
</template>

<script>
import TodoListItemMenu from "./TodoListItemMenu.vue";
import DialogEdit from "../Dialog/DialogEdit.vue";
import DialogDatePicker from "../Dialog/DialogDatePicker.vue";
import DialogDelete from "../Dialog/DialogDelete.vue";

import { format } from "date-fns";

export default {
  props: {
    todo: Object,
  },

  components: {
    TodoListItemMenu,
    DialogEdit,
    DialogDatePicker,
    DialogDelete,
  },

  data() {
    return {
      dialogs: {
        edit: false,
        dueDate: false,
        delete: false,
      },
    };
  },

  filters: {
    formattedDate(date) {
      return format(new Date(date), "MMM d");
    },
  },

  methods: {
    showEditDialog() {
      this.dialogs.edit = true;
    },

    showDatePickerDialog() {
      this.dialogs.dueDate = true;
    },

    showDeleteDialog() {
      this.dialogs.delete = true;
    },

    toggleDoneTodo(id) {
      this.$store.commit("TOGGLE_DONE_TODO", id);
    },

    cancelUpdate() {
      this.dialogs.edit = false;
    },

    cancelDatePicker() {
      this.dialogs.dueDate = false;
    },

    cancelDelete() {
      this.dialogs.delete = false;
    },

    onUpdate(title) {
      const data = {
        id: this.todo.id,
        title,
      };
      this.$store.dispatch("updateTodo", data);

      this.dialogs.edit = false;
    },

    onDatePicked(date) {
      const data = {
        id: this.todo.id,
        dueDate: date,
      };
      this.$store.dispatch("datePicked", data);

      this.dialogs.dueDate = false;
    },

    onDelete() {
      this.$store.dispatch("deleteTodo", this.todo.id);
    },
  },
};
</script>
