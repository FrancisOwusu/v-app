<template>
  <div>dddffff{{ numEmployees }}</div>
  <div>dddffff{{ getMessage() }}</div>
  <div>this is my age:{{ getAge() }}</div>
</template>
<script setup>
import { ref } from 'vue';

import appManager from '../utils/appManager';

const { numEmployees, addToEmployees, subtractFromEmployees, getMessage, age } =
  appManager();
function getAge() {
  return `my age is ${age}`;
}
// return { numEmployees, addToEmployees, subtractFromEmployees };
</script>

<style>
select[multiple] {
  width: 100px;
}
</style>
