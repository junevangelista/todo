<template>
  <v-snackbar :value="true">
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="hideSnackbar"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    text: String,
  },

  methods: {
    hideSnackbar() {
      this.$store.commit("hideSnackbar");
    },
  },
};
</script>
