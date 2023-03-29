<script setup>
import { reactive, computed, ref } from 'vue';
const isActive = ref(true);
const hasError = ref(false);

// const classObject2 = computed(() => ({
//   active: isActive.value && !error.value,
//   'text-danger': error.value && error.value.type === 'fatal',
// }));

const classObject = reactive({
  active: true,
  'text-danger': false,
});

// Binding to Arrays
const activeClass = ref('active');
const errorClass = ref('text-danger');

//style
const activeColor = ref('red');
const fontSize = ref(30);

const styleObject = reactive({
  color: 'red',
  fontSize: '13px',
});
</script>

<template>
  <h5>Inline Style</h5>
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
  <div :style="{ 'font-size': fontSize + 'px' }"></div>

  <div :style="styleObject"></div>
  <div :style="[baseStyles, overridingStyles]"></div>

  <!-- multiple values -->
  <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>

  ****************************************************************************
  <h1>Heeee{{ classObject }}</h1>

  <div
    class="static"
    :class="{ active: isActive, 'text-danger': hasError }"
  ></div>
  <div :class="classObject"></div>

  <!-- <div :class="classObject2"></div> -->
  <h3>Bind Arrays</h3>
  <div :class="[activeClass, errorClass]"></div>
  <!-- <div class="active text-danger"></div> -->

  <!-- If you would like to also toggle a class in the list conditionally, you can do it with a ternary expression: -->
  <div :class="[isActive ? activeClass : '', errorClass]"></div>

  <!-- <div :class="[isActive ? activeClass : '', errorClass]"></div> -->
  <!-- use object syntax in array -->
  <div :class="[{ active: isActive }, errorClass]"></div>

  *********************************************************************************
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
