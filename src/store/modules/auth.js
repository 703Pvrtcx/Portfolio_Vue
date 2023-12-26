import authApi from '@/api/auth';

const state = {
    isSubmitting: false,
    isLoggedIn: null,
    currentUser: null,
    validationErrors: null
}
const mutations = {
    registerStart(state){
        state.isSubmitting = true;
        state.validationErrors = null
    },
    registerSuccess(state, payload){
        state.isSubmitting = false;
        state.isLoggedIn = true;
        state.currentUser = payload;
    },
    registerFailure(state, payload){
        state.isSubmitting = false;
        state.validationErrors = payload
    }
}
const actions ={
    register(context,credentials){
       
       return new Promise(resolve=>{
            context.commit('registerStart')
            authApi.register(credentials)
            .then(response=>{
                context.commit('registerSuccess', response.data.user);
                resolve(response.data.user)
            }).catch(error=>{
                console.log('Error message: ',error);
                console.log('Error message: ',error.response.data.errors);
                context.commit('registerFailure', error.response.data.errors);
            })
       })
        // context.commit('registerStart')
        // setTimeout(()=>{

           
        // },1000)
    }
}
export default {
    state,
    actions,
    mutations,
    // getters
}