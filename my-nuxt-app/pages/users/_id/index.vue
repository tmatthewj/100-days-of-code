<template>
<p>A single user page with ID {{$route.params.id}}</p>
</template>

<script>
export default {
    validate (data) {
        console.log(data);
        return /^\d+$/.test(data.params.id);
    },
    layout: "users"
}
</script>