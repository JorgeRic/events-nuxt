import Vuex from "vuex";
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      token: null,
      user: ''
    },
    mutations: {
      setToken(state, token){
        state.token = token
      },
      clearToken(state){
        state.token = null
      },
      setUser(state, user){
        state.user = user
      },
      clearUser(state, user){
        state.user = null
      }
    },
    actions: {
      authenticateUser(vuexContext, authData) {
        let authUrl =
          "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
          process.env.fbAPIKey;
        if (!authData.isLogin) {
          authUrl =
            "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
            process.env.fbAPIKey;
        }
        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(result => {
            vuexContext.commit('setUser', result.email)
            vuexContext.commit("setToken", result.idToken);
            localStorage.setItem("token", result.idToken);
            localStorage.setItem(
              "tokenExpiration",
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
              );
              Cookie.set("jwt", result.idtoken);
              Cookie.set(
                "expirationDate",
                new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
              );
             return this.$axios.$post('http://localhost:3000/api/track-data', {data:'Autentificacion'})
          })
          .catch(error => console.log(error));
      },
     
      initAuth(vuexContext, req) {
        let token;
        let expirationDate;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie
            .split(";")
            .find(key => key.trim().startsWith("jwt="));
          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split("=")[1];
          expirationDate = req.headers.cookie
            .split(";")
            .find(key => key.trim().startsWith("expirationDate="))
            .split("=")[1];
        } else {
          token = localStorage.getItem("token");
          expirationDate = localStorage.getItem("tokenExpiration");
        }
          if (new Date().getTime() > +expirationDate || !token) {
            vuexContext.dispatch('logout')
            return;
        }
        vuexContext.commit("setToken", token);
      },
      logout(vuexContext){
        vuexContext.commit('clearToken')
        vuexContext.commit('clearUser')
        Cookie.remove('jwt')
        Cookie.remove('expirationDate')
        if(process.client){
          localStorage.removeItem('token')
          localStorage.removeItem('tokenExpiration')
        }
      }
    },
    //Este getters se pasa al middleware para proteger las rutas autentificadas de las que no lo estan
    getters: {
      isAuthenticated(state){
        return state.token != null
      }
    }
  });
};

export default createStore;

