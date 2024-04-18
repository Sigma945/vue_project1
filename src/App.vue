<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import Layout from "./views/Layout.vue";

export default {
  components: {
    Layout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>
