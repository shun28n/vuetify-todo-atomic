<template>
  <v-list class="pt-0" flat>
    <draggable v-model="tasks" handle=".handle">
      <!-- taskという名でtasksを一つずつTask.vueに渡す -->
      <task
        v-for="task in $store.getters.tasksFiltered"
        :key="task.id"
        :task="task"
      />
    </draggable>
  </v-list>
</template>

<script>
import draggable from "vuedraggable";
export default {
  computed: {
    tasks: {
      // getter 関数  get: function () {と同義
      // 初期表示、検索に応じた値を返す
      get() {
        return this.$store.getters.tasksFiltered;
      },
      set(value) {
        this.$store.commit("setTasks", value);
      },
    },
  },
  components: {
    task: require("@/components/organisms/Tasks/Task.vue").default,
    draggable,
  },
};
</script>