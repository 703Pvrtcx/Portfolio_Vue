const state = {
    isSubmitting: false
}
const mutations = {
    registerStart(state){
        state.isSubmitting = true;
    }
}
const actions ={
    register(context){
        context.commit('registerStart')
    }
}
export default {
    state,
    actions,
    mutations,
    // getters
}