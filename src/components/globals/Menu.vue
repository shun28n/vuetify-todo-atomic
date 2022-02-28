<template>
  <v-navigation-drawer v-model="drawer" :mobile-breakpoint="768" app>
    <v-img
      class="pa-4 pt-7"
      src="mountains.jpg"
      height="170"
      primary
      gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
    >
      <v-avatar color="indigo" size="50" class="mb-2">
        <v-icon dark size="40"> mdi-account-circle </v-icon>
      </v-avatar>
      <div class="white--text text-subtitle-1 font-weight-bold">
        Shunya Nakamichi
      </div>
      <div class="white--text text-subtitle-2">shunya_naka</div>
    </v-img>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Todo", icon: "mdi-format-list-checks", to: "/" },
      { title: "詳細", icon: "mdi-help-box", to: "/about" },
    ],
  }),
};
</script>

<style>
</style>