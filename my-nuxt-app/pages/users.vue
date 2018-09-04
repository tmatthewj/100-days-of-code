<template>
<div>
    <p> Users View</p>
    <input type="text" v-model="userId">
    <button @click="onLoadUsers">Load User</button>
    <nuxt-child />
</div>
</template>

<script>
export default {
    layout: "users",
    data() {
        return {
            userId: ''
        }
    },
    methods: {
        onLoadUsers() {
            this.$router.push('/users/' + this.userId);
        }
    }
}
</script>
