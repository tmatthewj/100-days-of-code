<template>
    <header class="header">
        <ul class="nav-items">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/users">Users</nuxt-link></li>
            <li><a href="http://localhost:3000/friends">Friends</a></li>
        </ul>
    </header>
</template>

<style <style scoped>
.header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgrey;
}
.nav-items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
}
.nav-items a {
    text-decoration: none;
    color: black;
}
.nav-items a:hover,
.nav-items a:active {
    color: white;
}
</style>