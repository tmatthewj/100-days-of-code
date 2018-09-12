import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts (state, posts) {
                state.loadedPosts = posts;
            }
        },
        actions: {
            nuxtServerInit (vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
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
                        ])
                        resolve();
                    }, 1000);
                })
            },
            setPosts (vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts (state) {
                return state.loadedPosts;
            }
        }
    })
}

export default createStore