const state = {
    isSubmitting: false
}
const mutations = {
    registerStart(state){
        state.isSubmitting = true;
        console.log('yes');
    }
}
export default {
    state,
    // actions,
    mutations,
    // getters
}