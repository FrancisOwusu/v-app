<template>
  <input :value="text" @input="(event) => (text = event.target.value)" />

  <input v-model="text" />

  <p>Message is: {{ message }}</p>
  <input v-model="message" placeholder="edit me" />

  <span>Multiline message is:</span>
  <p style="white-space: pre-line">{{ message }}</p>
  <textarea v-model="message" placeholder="add multiple lines"></textarea>

  <!-- bad -->
  <textarea>{{ text }}</textarea>

  <!-- good -->
  <textarea v-model="text"></textarea>

  <div>Checked names: {{ checkedNames }}</div>

  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">John</label>

  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>

  <div>Picked: {{ picked }}</div>

  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>

  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>

  <span> Selected: {{ selected }}</span>

  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

  <div>Selected: {{ selected }}</div>

  <select v-model="selected" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

  <select v-model="selected">
    <option v-for="option in options" :value="option.value">
      {{ option.text }}
    </option>
  </select>

  <div>Selected: {{ selected }}</div>

  <!-- `picked` is a string "a" when checked -->
  <input type="radio" v-model="picked" value="a" />

  <!-- `toggle` is either true or false -->
  <input type="checkbox" v-model="toggle" />

  <!-- `selected` is a string "abc" when the first option is selected -->
  <select v-model="selected">
    <option value="abc">ABC</option>
  </select>

  <input type="radio" v-model="pick" :value="first" />
  <input type="radio" v-model="pick" :value="second" />

  <select v-model="selected">
    <!-- inline object literal -->
    <option :value="{ number: 123 }">123</option>
  </select>

  <!-- synced after "change" instead of "input" -->
  <input v-model.lazy="msg" />

  <input v-model.number="age" />

  <input v-model.trim="msg" />
  <div>dddffff{{ numEmployees }}</div>
</template>
<script setup>
import { ref } from 'vue';

import appManager from '../utils/appManager';

const message = ref('');
const checked = ref(true);
const checkedNames = ref([]);

const picked = ref('One');
// const selected = ref('');

const selected = ref('A');

const options = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' },
]);

const { numEmployees, addToEmployees, subtractFromEmployees } = appManager();

// return { numEmployees, addToEmployees, subtractFromEmployees };
</script>

<style>
select[multiple] {
  width: 100px;
}
</style>
