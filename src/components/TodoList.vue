<template>
    <div class="container">
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Date</th>
                    <th scope="col">Done</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks">
                    <td> {{ index +1 }} </td>
                    <td> {{ task }} </td>
                    <td> 05-10-2018 </td>
                    <td> No </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class TodoList extends Vue {


    private tasks: string[] = [
        'Task 1',
        'Task 2',
        'Task 3',
        'Task 4',
        'Task 5',
        'Task 6',
        'Task 7',
    ];

}
</script>
