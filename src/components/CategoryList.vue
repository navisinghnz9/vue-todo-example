<template>
    <div class="container">
        <ul class="list-group" v-for="category in categories">
            <li class="list-group-item" 
                v-bind:class="{active: category.title == selectedCategory}"
                @click="changeCategory(category.title)">
                {{ category.title }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import sanity from '../sanity';

@Component({})
export default class CategoryList extends Vue {

    private selectedCategory: string;
    private categories: any[];

    constructor() {
        super();

        this.selectedCategory = "";
        this.categories = [];

        this.getAllCategories();
    }

    private getAllCategories() {

        const query = `*[_type == "category"]`;

        this.categories = [];

        sanity.fetch(query, {}).then(categories => {
            this.categories = categories;

            // if no category is selected, select first one as default
            if(this.selectedCategory == "" && this.categories.length > 0) {
                this.selectedCategory = categories[0].title;
            }
        }, error => {
            console.log("got error !");
        });
    }

    private changeCategory(category: string) {
        this.selectedCategory = category;
    }
}
</script>
