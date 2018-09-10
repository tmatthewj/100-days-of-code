<template>
    <div class="posts-page">
        <post-list :posts="loadedPosts"/>
    </div> 
</template>

<script>

import PostList from '~/components/Posts/PostList';

export default {
    components: {
        PostList
    },
    asyncData(context) {
        console.log(context)
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                loadedPosts: [
                    { id: '1',
                    title: 'First Post', 
                    previewText: 'This is my first post', 
                    thumbnail: "https://www.diplateevo.com/wp-content/uploads/2012/02/tech-tshirt.png",
                    },
                    { id: '2',
                    title: 'Second Post', 
                    previewText: 'This is my second post', 
                    thumbnail: "https://www.diplateevo.com/wp-content/uploads/2012/02/tech-tshirt.png",
                    },
                ]                
            });
        }, 1000);
        })
        .then(data => {
            return data
        })
        .catch(e => {
            context.error(new Error())
        })
    }, 
}
</script>


<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
