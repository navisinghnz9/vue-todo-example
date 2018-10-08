<template>
    <div class="container">
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Date</th>
                    <th scope="col">Done</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(todo, index) in todos">
                    <td>{{ index +1 }}</td>
                    <td>{{ todo.title }}</td>
                    <td>{{ todo.scheduledOn }}</td>
                    <td v-if="todo.isDone">Yes</td>
                    <td v-if="!todo.isDone">No</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import sanity from '../sanity';

@Component({})
export default class TodoList extends Vue {


    private selectedTodo: string;
    private selectedCategory: any;
    private todos: any[];

    constructor() {
        super();

        this.selectedTodo = "";
        this.todos = [];
        this.selectedCategory = null;

        this.$root.$on("onSelCategoryChanged", this.onSelCategoryChanged);
    }

    private getTodos() {

        var query:string = `*[_type == "todo"]`;
        if(this.selectedCategory){
            query = `*[_type == "todo" && references('${this.selectedCategory._id}')]`;
        }

        console.log("query: " + query);

        sanity.fetch(query, {}).then(todos => {
            this.todos = todos;

            // if no todo is selected, select first one as default
            if(this.selectedTodo == "" && this.todos.length > 0) {
                this.selectedTodo = todos[0].title;
            }
        }, error => {
            console.log("got error:: " + error);
        });
    }

    private changeTodo(todo: string) {
        this.selectedTodo = todo;
    }

    private onSelCategoryChanged(category: any) {
        console.log(`selected category: ${category.title}`);
        console.log(`selected category: ${category._id}`);
        this.selectedCategory = category;
        this.getTodos();
    }

}
</script>
