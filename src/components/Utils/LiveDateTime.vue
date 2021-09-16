<template>
  <div class="text-subtitle-1">{{ formattedDate }}</div>
</template>

<script>
import { format } from "date-fns";

export default {
  data() {
    return {
      date: new Date(),
    };
  },

  computed: {
    formattedDate() {
      return format(this.date, "MMMM d, H:mm:ss");
    },
  },

  mounted() {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
};
</script>
