<template>
  <div class="home">
    <!-- 追加フォーム -->
    <field-add-task />

    <!-- ストアにタスクが存在していればlist-tasks表示 -->
    <list-tasks v-if="$store.state.tasks.length" />
    <no-tasks v-else />

    <!-- ソートが有効な場合、「ソート終了ボタン」表示 -->
    <button-done-sorting v-if="$store.state.sorting" />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    "field-add-task": require("@/components/organisms/Tasks/FieldAddTask.vue")
      .default,
    "list-tasks": require("@/components/organisms/Tasks/ListTasks.vue").default,
    "no-tasks": require("@/components/uiParts/NoTasks.vue").default,
    "button-done-sorting":
      require("@/components/organisms/ButtonDoneSorting.vue").default,
  },
};
</script>