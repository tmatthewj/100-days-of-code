import Vuex from 'vuex'
import axios from 'axios'
import Cookie from 'js-cookie' 

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            token: null
        },
        mutations: {
            setPosts (state, posts) {
                state.loadedPosts = posts;
            },
            addPost(state, post) {
                state.loadedPosts.push(post);
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(
                    post => post.id === editedPost.id
                );
                state.loadedPosts[postIndex] = editedPost;
            },
            setToken(state, token) {
                state.token = token
            },
            clearToken(state) {
                state.token = null
            }
        },
        actions: {
            nuxtServerInit (vuexContext, context) {
                return axios.get(process.env.baseUrl + '/posts.json')
                    .then(res => {
                        const postsArray = []
                        for (const key in res.data) {
                            postsArray.push({ ...res.data[key], id: key })
                        }
                        vuexContext.commit('setPosts', postsArray)
                    })
                    .catch(e => context.error(e));
            },
            addPost(vuexContext, post) {
                const createdPost = {
                    ...post,
                    updatedDate: new Date()
                }
                return axios
                .post(process.env.baseUrl + '/posts.json?auth=' + 
                    vuexContext.state.token, createdPost)
                .then(res => {
                    vuexContext.commit('addPost', {
                        ...createdPost, id: res.data.name
                    })
                })
                .catch(e => console.log(e))
            },
            editPost(vuexContext, editedPost) {
                return axios
                .put(process.env.baseUrl +'/posts/' + 
                    editedPost.id + 
                    '.json?auth=' + 
                    vuexContext.state.token, editedPost)
                .then(res => {
                    vuexContext.commit('editPost', editedPost)
                })
                .catch(e => console.log(e))
            },
            setPosts (vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            },
            authenticateUser (vuexContext, authData) {
                let authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key='
                + process.env.fbApiKey
                if(!authData.isLogin) {
                    authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key='
                    + process.env.fbApiKey
                }        
                return axios.post(authUrl, {
                  email: authData.email,
                  password: authData.password,
                  returnSecureToken: true
                })
                .then(res => {
                    vuexContext.commit('setToken', res.data.idToken)
                    localStorage.setItem('token', res.data.idToken)
                    localStorage.setItem(
                        'tokenExpiration',
                        new Date().getTime() + Number.parseInt(res.data.expiresIn) * 1000)
                    Cookie.set('jwt',res.data.idToken)
                    Cookie.set(
                        'jwtExpiratonDate',
                        new Date().getTime() + Number.parseInt(res.data.expiresIn) * 1000)
                })
                .catch(e => console.log(e))              
            },
            initAuth (vuexContext, req) {
                let token
                let tokenExpiration
                if (req) {
                    if (!req.headers.cookie) {
                        return
                    }
                    const jwtCookie = req.headers.cookie
                        .split(";")
                        .find(c => c.trim().startsWith("jwt="))
                    if (!jwtCookie) {
                        return
                    }
                    token = jwtCookie.split(":")[1]
                    tokenExpiration = req.headers.cookie
                    .split(";")
                    .find(c => c.trim().startsWith("jwtExpiratonDate="))
                    .split("=")[1]
                } else {
                    token = localStorage.getItem('token')
                    tokenExpiration = localStorage.getItem('tokenExpiration')
                }

                if (!token || new Date().getTime() > tokenExpiration) {
                    console.log("Invalid or expired token")
                    vuexContext.dispatch('logout')
                    return
                }
                vuexContext.commit('setToken', token)
            },
            logout (vuexContext) {
                vuexContext.commit('clearToken')
                Cookie.remove('jwt')
                Cookie.remove('jwtExpirationDate')
                if (process.client) {
                    localStorage.removeItem('token')
                    localStorage.removeItem('tokenExpiration')    
                }
            }
        },
        getters: {
            loadedPosts (state) {
                return state.loadedPosts
            },
            loadedPostById: (state) => (postId) => {
                return state.loadedPosts.find(loadedPost => loadedPost.id === postId)
            },
            isAuthenticated (state) {
                return state.token != null
            }   
        }
    })
}

export default createStore