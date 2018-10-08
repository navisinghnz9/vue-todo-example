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
import sanity from '@/sanity';
import Category from '@/models/Category';
import Todo from '@/models/Todo';

@Component({})
export default class TodoList extends Vue {

    private selectedTodo: Todo | null = null;
    private selectedCategory: Category | null = null;
    private todos: Todo[] = [];

    constructor() {
        super();

        this.$root.$on('onSelCategoryChanged', this.onSelCategoryChanged);
    }

    private getTodos() {

        let query: string = `*[_type == "todo"]`;
        if (this.selectedCategory) {
            query = `*[_type == "todo" && references('${this.selectedCategory._id}')]`;
        }

        sanity.fetch(query, {}).then( (todos: Todo[]) => {

            this.todos = todos;

            // if no todo is selected, select first one as default
            if (this.selectedTodo == null && this.todos.length > 0) {
                this.selectedTodo = todos[0];
            }
        }, (error: any) => {
            console.error(`TodoList :: got error:: ${error}`);
        });
    }

    private changeTodo(todo: Todo) {
        this.selectedTodo = todo;
    }

    private onSelCategoryChanged(category: any) {
        this.selectedCategory = category;
        this.getTodos();
    }

}
</script>
