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
      timeout: 5000,
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

    UPDATE_TODO(state, payload) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === payload.id;
      });

      state.todos[index] = Object.assign(state.todos[index], payload);
    },

    TOGGLE_DONE_TODO(state, payload) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === payload;
      });

      state.todos[index].done = !state.todos[index].done;
    },

    DELETE_TODO(state, payload) {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== payload;
      });
    },

    SHOW_SNACKBAR(state, payload) {
      state.snackbar = {
        show: true,
        text: payload,
        timeout: 5000,
      };
    },

    HIDE_SNACKBAR(state) {
      state.snackbar = {
        show: false,
        text: "",
        timeout: 0,
      };
    },
  },
  actions: {
    addTodo({ commit }, id) {
      // clear snackbar before showing
      commit("HIDE_SNACKBAR");

      // wait for snackbar to be hidden
      Vue.nextTick(() => {
        commit("ADD_TODO", id);
        commit("SHOW_SNACKBAR", "Task added!");
      });
    },

    updateTodo({ commit }, data) {
      commit("HIDE_SNACKBAR");

      Vue.nextTick(() => {
        commit("UPDATE_TODO", data);
        commit("SHOW_SNACKBAR", "Task updated!");
      });
    },

    deleteTodo({ commit }, id) {
      // clear snackbar before showing
      commit("HIDE_SNACKBAR");

      // wait for snackbar to be hidden
      Vue.nextTick(() => {
        commit("DELETE_TODO", id);
        commit("SHOW_SNACKBAR", "Task deleted!");
      });
    },
  },
  modules: {},
});
