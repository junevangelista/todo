import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, title: "Wake up", done: true },
      { id: 2, title: "Get bananas", done: false },
      { id: 3, title: "Eat bananas", done: false },
    ],

    snackbar: {
      show: false,
      text: "",
    },
  },
  mutations: {
    ADD_TODO(state, payload) {
      const newTodo = {
        id: Date.now(),
        title: payload,
        done: false,
      };

      state.todos.push(newTodo);
    },

    toggleDoneTodo(state, payload) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === payload;
      });

      state.todos[index].done = !state.todos[index].done;
    },

    deleteTodo(state, payload) {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== payload;
      });
    },

    hideSnackbar(state) {
      state.snackbar = {
        show: false,
        text: "",
      };
    },

    SHOW_SNACKBAR(state, payload) {
      state.snackbar = {
        show: true,
        text: payload,
      };
    },
  },
  actions: {
    addTodo({ commit }, id) {
      commit("ADD_TODO", id);
      commit("SHOW_SNACKBAR", "Todo added!");
    },
  },
  modules: {},
});
