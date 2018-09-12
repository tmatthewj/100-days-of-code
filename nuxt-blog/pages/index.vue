<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <post-list :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList'

export default {
  components: {
    PostList
  },
    computed: {
      loadedPosts() {
          return this.$store.getters.loadedPosts
      }
  },

  // data() {
  //   // return {
  //   //   loadedPosts: []
  //   // };
  // },

// asyncData(context, callback) {
  //   console.log(context)
  //   setTimeout(() => {
  //     callback(null, {loadedPosts: [
  //       { id: '1',
  //        title: 'First Post', 
  //        previewText: 'This is my first post', 
  //        thumbnail: "https://www.diplateevo.com/wp-content/uploads/2012/02/tech-tshirt.png",
  //       },
  //       { id: '2',
  //        title: 'Second Post', 
  //        previewText: 'This is my second post', 
  //        thumbnail: "https://www.diplateevo.com/wp-content/uploads/2012/02/tech-tshirt.png",
  //       },
  //     ]});
  //   }, 1500);
  // },

  // created() {
  //   setTimeout(() => {
  //     this.loadedPosts = [
  //       { id: '1',
  //        title: 'First Post', 
  //        previewText: 'This is my first post', 
  //        thumbnail: "https://www.diplateevo.com/wp-content/uploads/2012/02/tech-tshirt.png",
  //       },
  //       { id: '2',
  //        title: 'Second Post', 
  //        previewText: 'This is my second post', 
  //        thumbnail: "https://www.diplateevo.com/wp-content/uploads/2012/02/tech-tshirt.png",
  //       },
  //     ]
  //   } , 3000)
  // }
}

</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~/assets/images/bg-image.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
