<script setup>
import { store } from '../data/store';
import { ref, reactive, computed } from 'vue';
const parentMessage = ref('Parent');
const items = ref([{ message: 'Foo' }, { message: 'Bar' }]);

const awesome = ref(true);
const ok = ref(true);
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10',
});

// export default {
//   name: 'NumberSubmit',
//   data() {
//     return {
//       newNumber: 0,
//     };
//   },
//   methods: {
//     pushNewNumber(newNumber) {
//       store.pushNewNumber(newNumber);
//     },
//   },
// };
const numbers = ref([1, 2, 3, 4, 5]);

const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0);
});

const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
]);

function even(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}
function say(message) {
  alert(message);
}
</script>
<!-- <template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template> -->

<template>
  <ul v-for="numbers in sets">
    <li v-for="n in even(numbers)">{{ n }}</li>
  </ul>

  <li v-for="n in evenNumbers">{{ n }}</li>

  <ul>
    <template v-for="item in items">
      <li>{{ item.msg }}</li>
      <li class="divider" role="presentation"></li>
    </template>
  </ul>

  <!--
This will throw an error because property "todo"
is not defined on instance.
-->
  <!-- v-for with v-if -->
  <!-- <li v-for="todo in todos" v-if="!todo.isComplete">
    {{ todo.name }}
  </li> -->

  <div v-for="item in items" :key="item.id">
    <!-- content -->
  </div>

  <!-- v-for with a Range -->
  <!-- loop through object using for -->
  <span v-for="n in 10">{{ n }}</span>

  <ul>
    <li v-for="value in myObject">
      {{ value }}
    </li>
  </ul>
  <!-- You can also provide a second alias for the property's name (a.k.a. key): -->
  <li v-for="(value, key) in myObject">{{ key }}: {{ value }}</li>

  <!-- And another for the index: -->
  <li v-for="(value, key, index) in myObject">
    {{ index }}. {{ key }}: {{ value }}
  </li>

  <h1 v-show="ok">Hello! ddd</h1>
  <!-- <u> -->
  <!-- <li v-for="item in items" v>
      {{ item.message }}
    </li> -->
  <!-- </u> -->
  <!-- v-if -->
  <h1 v-if="awesome">Vue is awesome!</h1>
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
  <li v-for="{ message } in items">
    {{ message }}
  </li>

  <!-- with index alias -->
  <li v-for="({ message }, index) in items">{{ message }} {{ index }}</li>

  <!-- nested loop -->
  <li v-for="item in items">
    <span v-for="childItem in item.children">
      {{ item.message }} {{ childItem }}
    </span>
  </li>

  use of as delimiters for loop
  <div v-for="item of items"></div>

  <!-- else -->
  <button @click="awesome = !awesome">Toggle</button>

  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>

  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>
</template>
