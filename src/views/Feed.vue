<template>
 <div id="feeds">
    <div v-if="isLoading">Loading...</div>
    <div class="error" v-if="error">Something bad happened</div>
    <div v-if="feed">
      <div class="article-preview" v-for="(article,index) in feed.articles" :key="index">
          <div class="article-meta">
            <router-link :to="{name:'userProfile', params: { slug: article.author.username}}">
              <img :src="article.author.image" alt="" srcset="">
            </router-link>
            <div class="info">
              <router-link :to="{name:'userProfile', params: { slug: article.author.username}}">
               {{ article.author.username }}
              </router-link>
              <span class="date">{{article.createdAt}}</span>
            </div>
            <div class="pull-xs-right">Add to favorites</div>
          </div>
          <router-link :to="{name:'article', params: { slug: article.slug}}" class="preview-link">
            <h1>{{article.title}}</h1>
            <p>{{article.description}}</p>
            <span>Read more...</span>
            Tag List
          </router-link>
      </div>
      Pagination
    </div>
 </div>
</template>

<script>
import { mapState } from 'vuex';

import { actionTypes } from '@/store/modules/feed';

export default {
    name: 'McvFeed',
    props: {
        apiUrl: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState({
            isLoading: state => state.feed.isLoading,
            feed: state => state.feed.data,
            error: state => state.feed.error
        })
    },
    mounted() {
        console.log('feed');
        this.$store.dispatch(actionTypes.getFeed, { apiUrl: this.apiUrl });
    },
}
</script>
