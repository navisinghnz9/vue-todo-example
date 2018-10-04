<template>
    <div class="container">
        <ul class="list-group" v-for="category in categories">
            <li class="list-group-item" 
                v-bind:class="{active: category == selectedCategory}"
                @click="changeCategory(category)">
                {{ category }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class CategoryList extends Vue {

    private selectedCategory: string;


    private categories: string[] = [
        'Shopping',
        'Study',
        'Wintec study',
        'Farmax work',
        'Hangout',
        'Self improvement',
        'Friends',
        'Family',
    ];

    constructor() {
        super();
        this.selectedCategory = this.categories[0];
    }

    private changeCategory(category: string) {
        this.selectedCategory = category;
    }
}
</script>
