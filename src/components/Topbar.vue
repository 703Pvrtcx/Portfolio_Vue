<template>
    <div>
        <nav class="navbar navbar-light"> 
           <div class="container">

            <router-link class="navbar-brand" :to=" {name:'home'}">MediumClone</router-link>

            <ul class="nav navbar-nav pull-xs-right">
                <li class="nav-item">
                    <router-link class="nav-link" :to=" {name:'home'}">Home</router-link>
                </li>
                <template v-if="isLoggedIn">
                    <li class="nav-item">
                        <router-link class="nav-link" :to=" {name:'home'}">
                            <!-- name: 'createArticle' -->
                            <i class="ion-compose"></i>
                            &nbsp;
                            New Article
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to=" {name:'home'}">
                            <!-- name: 'settings' -->
                            <i class="ion-gear-a"></i>
                            &nbsp;
                            Settings
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'home', params: { slug: currentUser.username}}">
                            <!-- name: 'userProfile' -->
                        <img class="user-pic" :src="currentUser.image" alt="">
                        &nbsp;
                        {{ currentUser.username }}
                        </router-link>
                    </li>
                </template>
                <template v-if="!isLoggedIn">
                    <li class="nav-item">
                        <router-link class="nav-link" :to=" {name:'login'}">
                         Sign in
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'register'}">
                        Sign up
                        </router-link>
                    </li>
                </template>
            </ul>


           </div>
        </nav>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    name: 'McvTopbar',
    computed: {
        ...mapState({
            currentUser: state => state.auth.currentUser,
            isLoggedIn: state => state.auth.isLoggedIn
        })
    }
}
</script>