<template>
  <div>
    <v-menu bottom left>
      <!-- 親コンポーネントからの情報をv-slotで受けるトリガー用スロット-->
      <template v-slot:activator="{ on, attrs }">
        <!-- ポップアップを追加したい要素に対しv-on="on"を追加 -->
        <v-btn color="primary" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <!-- ポップアップの内容 -->
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(index)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <dialog-edit
      v-if="dialogs.edit"
      @close="dialogs.edit = false"
      :task="task"
    />
    <dialog-due-date
      v-if="dialogs.dueDate"
      @close="dialogs.dueDate = false"
      :task="task"
    />
    <dialog-delete
      v-if="dialogs.delete"
      @close="dialogs.delete = false"
      :task="task"
    />
  </div>
</template>

<script>
export default {
  props: ["task"],
  data: () => ({
    dialogs: {
      edit: false,
      dueDate: false,
      delete: false,
    },
    items: [
      {
        title: "編集",
        icon: "mdi-pencil",
        click() {
          this.dialogs.edit = true;
        },
      },
      {
        title: "期日",
        icon: "mdi-calendar",
        click() {
          this.dialogs.dueDate = true;
        },
      },
      {
        title: "削除",
        icon: "mdi-delete",
        click() {
          this.dialogs.delete = true;
        },
      },
      {
        title: "ソート",
        icon: "mdi-drag-horizontal-variant",
        click() {
          this.$store.commit("toggleSorting");
        },
      },
    ],
  }),
  methods: {
    //どのメニューのどのclickイベントを呼び出すか
    handleClick(index) {
      this.items[index].click.call(this);
    },
  },
  components: {
    "dialog-delete": require("@/components/organisms//Dialogs/DialogDelete.vue")
      .default,
    "dialog-edit": require("@/components/organisms//Dialogs/DialogEdit.vue")
      .default,
    "dialog-due-date":
      require("@/components/organisms//Dialogs/DialogDueDate.vue").default,
  },
};
</script>