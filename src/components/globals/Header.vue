<template>
  <v-app-bar app color="primary" dark prominent height="170">
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        src="mountains.jpg"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <v-container class="header-container pa-0">
      <v-row>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <search />
      </v-row>
      <v-row>
        <v-toolbar-title class="text-h4 ml-4">
          {{ $store.state.appTitle }}
        </v-toolbar-title>
      </v-row>
      <v-row>
        <liveDateTime />
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  components: {
    search: require("@/components/organisms/Search.vue").default,
    liveDateTime: require("@/components/uiParts/LiveDateTime.vue").default,
  },
};
</script>

<style lang="sass">
.header-container
  max-width: none !important
</style>