<template>
    <div class="home">
        <Stats />
        <div class="row">
            <div class="col col-md-2">
                <CategoryList />
            </div>
            <div class="col col-md-10">
                <TodoList />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Stats from '@/components/Stats.vue'; // @ is an alias to /src
import CategoryList from '@/components/CategoryList.vue'; // @ is an alias to /src
import TodoList from '@/components/TodoList.vue'; // @ is an alias to /src
import AddTodo from '@/components/AddTodo.vue'; // @ is an alias to /src

@Component({
    components: {
        Stats,
        CategoryList,
        TodoList,
        AddTodo,
    },
})
export default class Home extends Vue {}
</script>
