<template>
  <v-card>
    <v-tabs
      background-color="white"
      center-active
    >
      <router-link to="/news"><v-tab>News</v-tab></router-link>
      <router-link to="/jobs"><v-tab>Jobs</v-tab></router-link>
      <router-link to="/ask"><v-tab>Ask</v-tab></router-link>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
    
}
</script>

<style>

</style>