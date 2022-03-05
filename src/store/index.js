import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // アプリ全体のデータの状態を管理
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    search: null,
    sorting: false,
    tasks: [
      {
        id: 1,
        title: 'Wake up',
        done: false,
        dueDate: '2020-10-16',
      },
      {
        id: 2,
        title: 'Get bananas',
        done: false,
        dueDate: '2020-10-17',
      },
      {
        id: 3,
        title: 'Eat bananas',
        done: false,
        dueDate: null,
      },
    ],
    snackbar: {
      show: false,
      text: '',
    },
  },
  // mutations : stateの更新だけを行う。
  mutations: {
    setSearch(state, value) {
      state.search = value;
    },
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null,
      };
      state.tasks.push(newTask);
    },
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    updateTaskTitle(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.title;
    },
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.dueDate = payload.dueDate;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    showSnackbar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },
    hideSnackbar(state) {
      state.snackbar.show = false;
    },
    toggleSorting(state) {
      state.sorting = !state.sorting;
    },
  },
  // actions:mutationsの呼び出しを行う。非同期API通信も行う。
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle);
      commit('showSnackbar', 'タスクが追加されました！');
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id);
      commit('showSnackbar', 'タスクが削除されました！');
    },
    updateTaskTitle({ commit }, payload) {
      commit('updateTaskTitle', payload);
      commit('showSnackbar', 'タスクが編集されました！');
    },
    updateTaskDueDate({ commit }, payload) {
      commit('updateTaskDueDate', payload);
      commit('showSnackbar', '期日が編集されました！');
    },
  },
  // getters : stateの値を算出したものを返す場合に役立つ。
  getters: {
    tasksFiltered(state) {
      if (!state.search) {
        return state.tasks;
      }
      return state.tasks.filter((task) =>
        task.title.toLowerCase().includes(state.search.toLowerCase())
      );
    },
  },
});
