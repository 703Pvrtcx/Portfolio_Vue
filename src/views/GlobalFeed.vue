<template>
 <!-- <div id="globalFeed" class="container">
    <div>Global Feed</div>
    <mcv-feed/>
 </div> -->

 <div class="home-page container1" id="globalFeed">
    BANNER
    <div class="container page">
        <div class="row">
            <div class="col-md-9">
                <mcv-feed :api-url="apiUrl"></mcv-feed>
            </div>
            <div class="col-md-3">
                Popular Tags
            </div>
        </div>
    </div>

 </div>
</template>

<script>
 import McvFeed from '@/views/Feed.vue'
export default {
    name: 'McvGlobalFeed',
    components:{
        McvFeed
    },
    data(){
      return {
        apiUrl: '/articles'
      }
    }
}

</script>

<style scoped>
#globalFeed {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }
</style>