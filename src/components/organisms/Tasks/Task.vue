<template>
  <div>
    <!-- タスク１つぶん -->
    <!-- タスククリックでdoneTask実行
    task.done:trueでblue 選択で色変えたいときに使用. ripple波紋エフェクト -->
    <v-list-item
      @click="$store.commit('doneTask', task.id)"
      :class="{ 'blue lighten-5': task.done }"
      class="white"
      :ripple="true"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
        </v-list-item-action>

        <!-- タスク名 -->
        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': task.done }"
          >
            {{ task.title }}
          </v-list-item-title>
        </v-list-item-content>

        <!-- 期日あれば表示 -->
        <v-list-item-action v-if="task.dueDate">
          <v-list-item-action-text>
            <v-icon small>mdi-calendar</v-icon>
            <!-- task.dueDateを引数としてフィルタniceDate実行 -->
            {{ task.dueDate | niceDate }}
          </v-list-item-action-text>
        </v-list-item-action>

        <!-- タスクメニューにtask情報を渡す -->
        <v-list-item-action>
          <task-menu :task="task" />
        </v-list-item-action>

        <!-- ソートが有効な場合、ソートハンドル表示 -->
        <v-list-item-action v-if="$store.state.sorting">
          <v-btn class="handle" color="primary" icon>
            <v-icon>mdi-drag-horizontal-variant </v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>

    <!-- タスクごとの区切り -->
    <v-divider></v-divider>
  </div>
</template>

<script>
import { format } from "date-fns";
export default {
  props: ["task"],
  filters: {
    niceDate(value) {
      return format(new Date(value), "MMM d");
    },
  },
  components: {
    "task-menu": require("@/components/organisms/Tasks/TaskMenu.vue").default,
  },
};
</script>
<style lang="sass">
.sortable-ghost
  opacity: 0
  .sortable-drag
    box-shadow: 0 0 4px rgba(0,0,0,3)
</style>