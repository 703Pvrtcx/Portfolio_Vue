import authApi from '@/api/auth';

const state = {
    isSubmitting: false
}
const mutations = {
    registerStart(state){
        state.isSubmitting = true;
    },
    registerSuccess(state){
        state.isSubmitting = false;
    },
    registerFailure(state){
        state.isSubmitting = false;
    }
}
const actions ={
    register(context,credentials){
        context.commit('registerStart')
       return new Promise(resolve=>{
            authApi.register(credentials)
            .then(response=>{
                console.log('Response: ',response);
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