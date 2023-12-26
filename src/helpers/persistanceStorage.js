export const getItem = key =>{
    try{
        return JSON.parse(localStorage.getItem(key))
    }catch(e){
        console.error('Error in getting data from localstorage');
        return null
    }
}
export const setItem = (key, data) =>{
    try{
       localStorage.setItem(key,JSON.stringify(data))
    }catch(e){
        console.error('Error in setting data to localstorage', e);
    }
}