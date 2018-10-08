<template>
    <div class="container">
        <ul class="list-group" v-for="category in categories">
            <li class="list-group-item" 
                v-bind:class="{active: category._id == selectedCategory._id}"
                @click="changeCategory(category)">
                {{ category.title }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import sanity from '@/sanity';
import Category from '@/models/Category';

@Component({})
export default class CategoryList extends Vue {

    private selectedCategory: Category | null = null;
    private categories: Category[] = [];

    constructor() {
        super();

        this.getAllCategories();
    }

    private getAllCategories() {

        const query = `*[_type == "category"] | order(title)`;

        this.categories = [];

        sanity.fetch(query, {}).then( (categories: Category[]) => {
            this.categories = categories;

            // if no category is selected, select first one as default
            if (this.selectedCategory == null && this.categories.length > 0) {
                this.selectedCategory = categories[0];
                this.changeCategory(this.selectedCategory);
            }
        }, (error: any) => {
            console.error(`CategoryList :: got error:: ${error}`);
        });
    }

    private changeCategory(category: Category) {
        this.selectedCategory = category;
        this.$root.$emit('onSelCategoryChanged', this.selectedCategory);
    }
}
</script>
