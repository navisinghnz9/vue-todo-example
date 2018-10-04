<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand" to="/">
                <h1 class="text-uppercase text-white">Vue Todo</h1>
            </router-link>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item" >
                    <router-link class="nav-link text-white" to="/today" >Today</router-link>
                </li>
                    <li class="nav-item" >
                        <router-link class="nav-link text-white" to="/done" >Done</router-link>
                    </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Navbar extends Vue {}
</script>
