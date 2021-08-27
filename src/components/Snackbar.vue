<template>
  <v-snackbar :value="snackbar.show" :timeout="snackbar.timeout">
    {{ snackbar.text }}

    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="hideSnackbar"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    snackbar() {
      return this.$store.state.snackbar;
    },
  },

  methods: {
    hideSnackbar() {
      this.$store.commit("HIDE_SNACKBAR");
    },
  },
};
</script>
