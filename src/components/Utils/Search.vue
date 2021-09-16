<template>
  <v-text-field
    :value="search"
    @input="onInput"
    placeholder="Search"
    hide-details
    clearable
  ></v-text-field>
</template>

<script>
import { debounce } from "lodash";

export default {
  computed: {
    search() {
      return this.$store.state.search;
    },
  },

  methods: {
    onInput: debounce(function (val) {
      this.$store.commit("SET_SEARCH", val);
    }, 500),
  },
};
</script>
