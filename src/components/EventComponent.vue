<template>
  <button @click="count++">Add 1</button>
  <p>Count is: {{ count }}</p>

  <div>
    <!-- <h2>{{ storeState.numbers }}</h2> -->
  </div>
  <!-- `greet` is the name of the method defined above -->
  <button @click="greet">Greet</button>
  <button @click="say('hello')">Say hello</button>
  <button @click="say('bye')">Say bye</button>

  <!-- using $event special variable -->
  <button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>

  <!-- using inline arrow function -->
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">
    Submit
  </button>

  <!-- the click event's propagation will be stopped -->
  <a @click.stop="doThis"></a>

  <!-- the submit event will no longer reload the page -->
  <form @submit.prevent="onSubmit"></form>

  <!-- modifiers can be chained -->
  <a @click.stop.prevent="doThat"></a>

  <!-- just the modifier -->
  <form @submit.prevent></form>

  <!-- only trigger handler if event.target is the element itself -->
  <!-- i.e. not from a child element -->
  <div @click.self="doThat">...</div>

  <!-- use capture mode when adding the event listener -->
  <!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
  <div @click.capture="doThis">...</div>

  <!-- the click event will be triggered at most once -->
  <a @click.once="doThis"></a>

  <!-- the scroll event's default behavior (scrolling) will happen -->
  <!-- immediately, instead of waiting for `onScroll` to complete  -->
  <!-- in case it contains `event.preventDefault()`                -->
  <div @scroll.passive="onScroll">...</div>
</template>
<script setup>
import { store } from '../data/store';
import { ref } from 'vue';
const name = ref('Vue.js');
const count = ref(0);

function greet(event) {
  alert(`Hello ${name.value}!`);
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName);
  }
}

function say(message) {
  alert(message);
}

function warn(message, event) {
  // now we have access to the native event
  if (event) {
    event.preventDefault();
  }
  alert(message);
}

// export default {
//   name: 'NumberDisplay',
//   data() {
//     return {
//       storeState: store.state,
//     };
//   },
// };
</script>
