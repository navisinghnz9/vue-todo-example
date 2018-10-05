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
    private todos: any[];

    constructor() {
        super();

        this.selectedTodo = "";
        this.todos = [];

        this.getTodos();
    }

    private getTodos() {

        const query = `*[_type == "todo"]`;

        this.todos = [];

        sanity.fetch(query, {}).then(todos => {
            this.todos = todos;

            // if no todo is selected, select first one as default
            if(this.selectedTodo == "" && this.todos.length > 0) {
                this.selectedTodo = todos[0].title;
            }
        }, error => {
            console.log("got error !");
        });
    }

    private changeTodo(todo: string) {
        this.selectedTodo = todo;
    }

}
</script>
