<template>
  <v-app id="inspire">
    <appMenu />
    <appHeader />
    <v-main>
      <router-view></router-view>

      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    snackbar: require("@/components/globals/Snackbar.vue").default,
    appHeader: require("@/components/globals/Header.vue").default,
    appMenu: require("@/components/globals/Menu.vue").default,
  },
};
</script>

<style lang="sass">
.header-container
  max-width: none !important
</style>