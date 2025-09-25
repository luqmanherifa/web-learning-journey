<template>
  <div class="flex items-center justify-center min-h-screen bg-sky-100 pb-10 pt-10">
    <div class="max-w-4xl mx-auto bg-sky-200 p-10 rounded-3xl border-4 border-sky-600 text-center">
      <h1 class="text-3xl font-extrabold text-sky-700 mb-7">To-Do List</h1>

      <div v-if="message" class="mb-4 text-red-600">{{ message }}</div>

      <form @submit.prevent="isEditing ? updateTodo() : addTodo()" class="flex justify-center mb-8">
        <input
          v-model="newTodo.title"
          type="text"
          placeholder="What to do?"
          required
          class="rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300 mr-2 border-[3px] border-sky-600 w-36 font-semibold text-sky-700 placeholder:text-sky-500"
        />
        <input
          v-model="newTodo.description"
          placeholder="Description"
          class="rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300 mr-2 border-[3px] border-sky-600 w-36 font-semibold text-sky-700 placeholder:text-sky-500"
        />
        <button
          type="submit"
          class="bg-sky-500 text-white px-4 py-2 rounded-xl hover:bg-sky-600 transition w-32 border-[3px] border-sky-600 font-semibold"
        >
          {{ isEditing ? 'Update' : 'Add' }}
        </button>
        <button
          v-if="isEditing"
          @click="cancelEdit"
          class="bg-sky-500 text-white px-4 py-2 rounded-xl hover:bg-sky-600 transition border-[3px] border-sky-600 ml-2 font-semibold"
        >
          X
        </button>
      </form>

      <ul class="space-y-4">
        <li v-for="todo in todos" :key="todo.id" class="flex items-center justify-between pb-1">
          <div class="flex items-center text-sky-700 font-semibold text-lg">
            <span>{{ todo.title }} - {{ todo.description }}</span>
          </div>
          <div class="space-x-2">
            <button
              @click="viewTodoDetail(todo)"
              class="bg-sky-500 text-white px-3 py-1 rounded-lg hover:bg-sky-600 transition text-sm border-[3px] border-sky-600 font-semibold"
            >
              View
            </button>
            <button
            @click="editTodo(todo)"
            class="bg-sky-500 text-white px-3 py-1 rounded-lg hover:bg-sky-600 transition text-sm border-[3px] border-sky-600 font-semibold"
          >
            Edit
          </button>
            <button
            @click="deleteTodo(todo.id)"
            class="bg-sky-500 text-white px-3 py-1 rounded-lg hover:bg-sky-600 transition text-sm border-[3px] border-sky-600 font-semibold"
          >
            Delete
          </button>
          </div>
        </li>
      </ul>

      <div v-if="selectedTodo" class="mt-6 p-5 border-[3px] border-sky-600 bg-sky-100 text-left rounded-2xl">
        <h2 class="text-xl font-bold mb-2 text-sky-700">Detail</h2>
        <h3 class="text-base font-semibold text-sky-700 mb-1">Title: {{ selectedTodo.title }}</h3>
        <p class="text-base font-semibold text-sky-700">Description: {{ selectedTodo.description }}</p>
        <button
          @click="selectedTodo = null"
          class="mt-4 bg-sky-500 text-white px-3 py-1 rounded-lg hover:bg-sky-600 font-semibold text-sm border-[3px] border-sky-600"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      todos: [],
      newTodo: {
        title: '',
        description: ''
      },
      selectedTodo: null,
      editingTodo: null,
      isEditing: false,
      message: '',
    };
  },
  methods: {
    async fetchTodos() {
      try {
        const response = await axios.get('http://localhost:3000/todos');
        this.todos = response.data;
      } catch (error) {
        console.error('Error fetching todos: ', error);
      }
    },
    async addTodo() {
      try {
        const response = await axios.post('http://localhost:3000/todos', this.newTodo);
        this.todos.push(response.data);
        this.newTodo.title = '';
        this.newTodo.description = '';
      } catch (error) {
        console.error('Error adding Todo: ', error);
      }
    },
    async updateTodo() {
      try {
        await axios.put(`http://localhost:3000/todos/${this.newTodo.id}`, this.newTodo);
        const index = this.todos.findIndex(todo => todo.id === this.newTodo.id);
        this.todos.splice(index, 1, this.newTodo);
        this.newTodo = { title: '', description: '' };
        this.isEditing = false;
      } catch (error) {
        console.error('Error updating Todo: ', error);
      }
    },
	async deleteTodo(id) {
      try {
        await axios.delete(`http://localhost:3000/todos/${id}`);
        this.todos = this.todos.filter(todo => todo.id !== id);
      } catch (error) {
        console.error('Error deleting Todo: ', error);
      }
    },
    viewTodoDetail(todo) {
      this.selectedTodo = todo;
    },
	editTodo(todo) {
      this.newTodo = { ...todo };
      this.isEditing = true;
    },
    cancelEdit() {
      this.newTodo = { title: '', description: '' };
      this.isEditing = false;
    },
  },
  mounted() {
    this.fetchTodos();
  }
};
</script>
