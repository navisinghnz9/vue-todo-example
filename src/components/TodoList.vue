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

    get selectedCategory(): Category{
        return this.$store.state.selectedCategory;
    }

    get todos(): Todo[] {
        return this.$store.state.todos;
    }

    private changeTodo(todo: Todo) {
        this.selectedTodo = todo;
    }

}
</script>
