import Vue from 'vue';
import Vuex from 'vuex';
import Category from '@/models/Category';
import Todo from '@/models/Todo';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      selectedCategory: null,
      todos: [],
  },
  mutations: {

      setSelectedCategory(state: any, category: Category) {
          state.selectedCategory = category;
      },

      setTodos(state: any, todos: Todo) {
          state.todos = todos;
      },

  },
  actions: {

  },
});
