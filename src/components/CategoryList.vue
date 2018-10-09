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

    private categories: Category[] = [];

    constructor() {
        super();

        this.getAllCategories();
    }

    get selectedCategory(): Category{
        return this.$store.state.selectedCategory;
    }

    private getAllCategories() {

        const query = `*[_type == "category"] | order(title)`;

        this.categories = [];

        sanity.fetch(query, {}).then( (categories: Category[]) => {
            // if no category is selected, select first one as default
            if (this.selectedCategory == null && categories.length > 0) {
                this.changeCategory(categories[0]);
            }

            this.categories = categories;
        }, (error: any) => {
            console.error(`CategoryList :: got error:: ${error}`);
        });
    }

    private changeCategory(category: Category) {
        this.$store.commit('setSelectedCategory', category);
        this.fetchTodos();
    }

    private fetchTodos() {

        let query: string = `*[_type == "todo"]`;
        if (this.selectedCategory) {
            query = `*[_type == "todo" && references('${this.selectedCategory._id}')]`;
        }

        return sanity.fetch(query, {}).then( (todos: Todo[]) => {
            this.$store.commit('setTodos', todos);
        }, (error: any) => {
            console.error(`TodoList :: got error:: ${error}`);
            this.$store.commit('setTodos', []);
        });
    }

}
</script>
