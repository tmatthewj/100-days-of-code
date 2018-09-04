<template>
  <div>
    <Header/>
    <h1>User Section</h1>
    <nuxt/>
  </div>
</template>

<script>
  import Header from '~/components/header.vue'

export default {
  components: {
    Header
  }  
}
</script>