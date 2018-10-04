<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<style lang="css">
@import './assets/css/bootstrap.css';
</style>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue'; // @ is an alias to /src

@Component({
    components: {
        Navbar,
    },
})


export default class App extends Vue { }
</script>
