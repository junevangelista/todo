<template>
  <v-text-field
    v-model="newTodo"
    outlined
    hide-details
    clearable
    label="Add Todo"
    class="pa-3"
    @keyup.enter="addTodo"
  >
    <template v-slot:append>
      <v-icon color="primary" :disabled="!newTodo" @click="addTodo"
        >mdi-plus</v-icon
      >
    </template>
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
    };
  },

  methods: {
    addTodo() {
      if (this.newTodo) {
        this.$store.dispatch("addTodo", this.newTodo);
        this.newTodo = "";
      }
    },
  },
};
</script>
