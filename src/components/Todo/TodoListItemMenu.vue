<template>
  <v-menu bottom left>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i" @click="handleClick(i)">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Edit",
          icon: "mdi-pencil",
          click: () => {
            this.$emit("update:item");
          },
        },
        {
          title: "Due Date",
          icon: "mdi-calendar",
          click: () => {
            this.$emit("dueDate:item");
          },
        },
        {
          title: "Delete",
          icon: "mdi-delete",
          click: () => {
            this.$emit("delete:item");
          },
        },
      ],
    };
  },

  methods: {
    handleClick(i) {
      this.items[i].click();
    },
  },
};
</script>
