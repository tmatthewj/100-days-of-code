<template>
    <div class="posts-page">
        Posts Page
        <section class="post-list">
        <post-preview
            id="1"
            thumbnail="https://www.diplateevo.com/wp-content/uploads/2012/02/tech-tshirt.png"
            title="My first post"
            previewText="This is my first post"/>
        <post-preview
            id="2"
            thumbnail="https://www.diplateevo.com/wp-content/uploads/2012/02/tech-tshirt.png"
            title="My second post"
            previewText="This is my first post"/>
        <post-preview
            id="3"
            thumbnail="https://www.diplateevo.com/wp-content/uploads/2012/02/tech-tshirt.png"
            title="My third post"
            previewText="This is my first post"/>
        </section>
    </div> 
</template>

<script>

import PostPreview from '~/components/Posts/PostPreview';

export default {
    components: {
        PostPreview
    }
}
</script>


<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>
