import authApi from '@/api/auth';
import { setItem } from '@/helpers/persistanceStorage'

const state = {
    isSubmitting: false,
    isLoggedIn: null,
    isLoading: false,
    currentUser: null,
    validationErrors: null
}
export const mutationTypes = {
    registerStart: '[auth] Register start',
    registerSuccess: '[auth] Register success',
    registerFailure: '[auth] Register failure',

    loginStart: '[auth] Login start',
    loginSuccess: '[auth] Login success',
    loginFailure: '[auth] Login failure',

    getCurrentUserStart: '[auth]  Get current user start',
    getCurrentUserSuccess: '[auth]  Get current user success',
    getCurrentUserFailure: '[auth]  Get current user failure'
}
export const actionTypes = {
    register: '[auth] Register',
    login: '[auth] Login',
    getCurrentUser: '[auth]  Get current user '
}
export const getterTypes = {
    currentUser: '[auth] CurrentUser',
    isLoggedIn: '[auth] IsLoggedIn',
    isAnonymous: '[auth] IsAnonymous',
}
const getters = {
    [getterTypes.currentUser]: state => {
        return state.currentUser
    },
    [getterTypes.isLoggedIn]: state => {
        return Boolean(state.isLoggedIn)
    },
    [getterTypes.isAnonymous]: state => {
        return state.isLoggedIn === false
    }
}
const mutations = {
    // Register Mutation Start
    [mutationTypes.registerStart](state){
        state.isSubmitting = true;
        state.validationErrors = null
    },
    [mutationTypes.registerSuccess](state, payload){
        state.isSubmitting = false;
        state.isLoggedIn = true;
        state.currentUser = payload;
    },
    [mutationTypes.registerFailure](state, payload){
        state.isSubmitting = false;
        state.validationErrors = payload
    },
   // Login Mutation Start
    [mutationTypes.loginStart](state){
        state.isSubmitting = true;
        state.validationErrors = null
    },
    [mutationTypes.loginSuccess](state, payload){
        state.isSubmitting = false;
        state.isLoggedIn = true;
        state.currentUser = payload;
    },
    [mutationTypes.loginFailure](state, payload){
        state.isSubmitting = false;
        state.validationErrors = payload
    },
   // Get Current User Mutation Start
    [mutationTypes.getCurrentUserStart](state){
        state.isLoading = true;
    },
    [mutationTypes.getCurrentUserSuccess](state, payload){
        state.isLoading = false;
        state.isLoggedIn = true;
        state.currentUser = payload;
     
    },
    [mutationTypes.getCurrentUserFailure](state){
        state.isLoading = false;
        state.isLoggedIn = false;
        state.currentUser = null;
    }
}
const actions ={
    [actionTypes.register](context,credentials){
       return new Promise(resolve=>{
            context.commit(mutationTypes.registerStart)
            authApi.register(credentials)
            .then(response=>{
                context.commit(mutationTypes.registerSuccess, response.data.user);
                setItem('accessToken', response.data.user.token)
                resolve(response.data.user)
            }).catch(error=>{
                context.commit(mutationTypes.registerFailure, error.response.data.errors);
            })
       })
    },
    [actionTypes.login](context,credentials){
        return new Promise(resolve=>{
             context.commit(mutationTypes.loginStart)
             authApi.login(credentials)
             .then(response=>{
                 context.commit(mutationTypes.loginSuccess, response.data.user);
                 setItem('accessToken', response.data.user.token)
                 resolve(response.data.user)
             }).catch(error=>{
                 context.commit(mutationTypes.loginFailure, error.response.data.errors);
             })
        })
    },
    [actionTypes.getCurrentUser](context){
        return new Promise(resolve=>{
             context.commit(mutationTypes.getCurrentUserStart)
             authApi.getCurrentUser()
             .then(response=>{
                 context.commit(
                    mutationTypes.getCurrentUserSuccess, 
                    response.data.user
                );
                resolve(response.data.user)
             }).catch(()=>{
                 context.commit(
                    mutationTypes.getCurrentUserFailure
                );
             })
        })
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}