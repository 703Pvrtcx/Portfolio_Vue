import authApi from '@/api/auth';
import { setItem } from '@/helpers/persistanceStorage'

const state = {
    isSubmitting: false,
    isLoggedIn: null,
    currentUser: null,
    validationErrors: null
}
export const mutationTypes = {
    registerStart: '[auth] Register start',
    registerSuccess: '[auth] Register success',
    registerFailure: '[auth] Register failure'
}

const mutations = {
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
    }
}
const actions ={
    register(context,credentials){
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
    }
}
export default {
    state,
    actions,
    mutations,
    // getters
}