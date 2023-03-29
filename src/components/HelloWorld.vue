<script setup>
import { reactive, computed, ref } from 'vue';
const isActive = ref(true);
const hasError = ref(false);
const profile = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery',
  ],
  contact: {
    name: 'Francis',
    age: '25',
  },
});

const classObject = reactive({
  active: true,
  'text-danger': false,
});

// a computed ref
const publishedBooksMessage = computed(() => {
  return profile.books.length > 0 ? 'Yes' : 'No';
});
const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
});

// in component
function calculateBooksMessage() {
  return profile.books.length > 0 ? 'Yes' : 'No';
}
// defineExpose({
//   contact,
// });

const firstName = ref('John');
const lastName = ref('Doe');

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value;
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    [firstName.value, lastName.value] = newValue.split(' ');
  },
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <div :class="{ active: isActive }"></div>
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
    {{ fullName.value }}
    <br />
    <h3>==================================================</h3>
    <div :class="classObject"></div>

    <div
      class="static"
      :class="{ active: isActive, 'text-danger': hasError }"
    ></div>
    <h3>=============================================</h3>
    <p>Get computed value{{ publishedBooksMessage.value }}</p>
    <p>{{ calculateBooksMessage() }}</p>
    <h3>
      You’ve successfully created a project with {{ profile.contact.name }}
      <!-- <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> + -->
      <!-- <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. -->
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
