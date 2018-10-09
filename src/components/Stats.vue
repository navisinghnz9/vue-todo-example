<template>
    <div class="jumbotron jumbotron-fluid" 
        v-if="selectedCategory != null"
        v-bind:style="{backgroundColor: selectedCategory.color}">
        <div class="container">
            <h1 class="display-4">
                {{ selectedCategory.title }}
            </h1>

            <p class="lead">
            {{ selectedCategory.description}}
            </p>

        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Category from '@/models/Category';

@Component({})
export default class Stats extends Vue {

    get selectedCategory(): Category{
        return this.$store.state.selectedCategory;
    }

}
</script>
