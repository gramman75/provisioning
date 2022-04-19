<template>
  <v-card>
    <v-tabs
      background-color="white"
      center-active
    >
      <v-tab><router-link to="news">News</router-link></v-tab>
      <v-tab><router-link to="jobs">Jobs</router-link></v-tab>
      <v-tab><router-link to="ask">Ask</router-link></v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
    
}
</script>

<style>

</style>