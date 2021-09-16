<template>
  <v-app id="inspire">
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Vuetify Todo </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.url">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark src="img/clouds.jpg" prominent>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container fluid>
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search v-if="search"></search>
          <v-btn icon @click="toggleSearch"><v-icon>mdi-magnify</v-icon></v-btn>
        </v-row>

        <v-toolbar-title class="mt-1">Vuetify Todo</v-toolbar-title>
        <live-date-time></live-date-time>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <snackbar></snackbar>
  </v-app>
</template>

<script>
import Snackbar from "./components/Utils/Snackbar.vue";
import Search from "./components/Utils/Search.vue";
import LiveDateTime from "./components/Utils/LiveDateTime.vue";

export default {
  name: "App",

  components: {
    Snackbar,
    Search,
    LiveDateTime,
  },

  data: () => ({
    drawer: null,
    items: [
      { title: "Todo", icon: "mdi-format-list-checks", url: "/" },
      { title: "About", icon: "mdi-help-box", url: "/about" },
    ],
    search: false,
  }),

  methods: {
    toggleSearch() {
      this.search = !this.search;
    },
  },
};
</script>
