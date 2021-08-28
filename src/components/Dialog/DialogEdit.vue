<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Edit task? </v-card-title>
      <v-card-text
        >Enter new title: <v-text-field v-model="title"></v-text-field
      ></v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="cancelUpdate"> Cancel </v-btn>
        <v-btn
          color="primary darken-1"
          text
          :disabled="title === todo.title || !title"
          @click="onUpdate"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    todo: Object,
  },

  data() {
    return {
      title: "",
    };
  },

  methods: {
    onUpdate() {
      this.$emit("on-update", this.title);
    },

    cancelUpdate() {
      this.$emit("cancel-update");
    },
  },

  mounted() {
    this.title = this.todo.title;
  },
};
</script>
