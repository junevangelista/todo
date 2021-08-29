<template>
  <v-dialog
    ref="dialog"
    :value="true"
    :return-value.sync="datePicked"
    persistent
    width="290px"
  >
    <v-date-picker v-model="datePicked" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="cancelDatePicker"> Cancel </v-btn>
      <v-btn text color="primary" @click="onDatePicked"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  props: {
    date: String,
  },

  data() {
    return {
      datePicked: null,
    };
  },

  methods: {
    onDatePicked() {
      this.$emit("date-picked", this.datePicked);
    },

    cancelDatePicker() {
      this.$emit("cancel");
    },
  },

  mounted() {
    if (this.date) {
      this.datePicked = this.date;
    }
  },
};
</script>
