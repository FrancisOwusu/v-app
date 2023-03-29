<script setup>
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import Example from './components/Example.vue';
import Sample from './components/Sample.vue';
import NumberSubmit from './components/NumberSubmit.vue';
import NumberDisplay from './components/NumberDisplay.vue';
import BindingComponent from './components/BindingComponent.vue';
import ConditionsComponent from './components/ConditionsComponent.vue';
import EventComponent from './components/EventComponent.vue';
import FormComponent from './components/FormComponent.vue';
import FunctionsComponent from './components/FunctionsComponent.vue';
import LoadDataComponent from './components/LoadDataComponent.vue';
</script>

<template>
  <LoadDataComponent />
  ==========================================
  <FunctionsComponent />
  <!-- <FormComponent /> -->
  ==========================================
  ==========================================
  <!-- <EventComponent /> -->
  ==========================================
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
    <!-- <ConditionsComponent /> -->
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <Sample />
      <!-- <Example msg="This is example component 787878" /> -->
    </div>
  </header>

  <main>
    <!-- <TheWelcome /> -->
    <!-- <BindingComponent /> -->
    <!-- <NumberSubmit /> -->
    <!-- <NumberDisplay /> -->
    <!-- <Example msg="This is example component 787878" contact="Phone" /> -->
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
