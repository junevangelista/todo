<template>
  <v-text-field
    v-model="newTodo"
    outlined
    hide-details
    clearable
    label="Add Todo"
    append-icon="mdi-plus"
    class="pa-3"
    @click:append="addTodo"
    @keyup.enter="addTodo"
  ></v-text-field>
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
      this.$store.dispatch("addTodo", this.newTodo);
      this.newTodo = "";
    },
  },
};
</script>
