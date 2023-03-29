<script>
import { reactive, computed, ref } from 'vue';
import axios from 'axios';
import { inject } from 'vue';

export default {
  name: 'Hame',
  //   setup() {
  //     const message = inject('message');
  //     return { message };
  //   },
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
      invoices: null,
      searchTerm: '',
    };
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
  computed: {
    filterSearch() {
      return this.posts.filter((post) => {
        return post.title.match(this.searchTerm);
      });
    },

    computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  created() {
    //get currency
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((response) => {
        console.log(response.data.bpi);
        this.info = response.data.bpi;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));

    //get posts
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.invoices = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<template>
  <div id="app">
    <input type="text" v-model="searchTerm" placeholder="Search" />
    <h1>Bitcoin Price Index {{ name }}</h1>
    <div v-for="currency in filterSearch" class="currency" :key="currency.id">
      {{ currency.title }}:
    </div>
    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>

      <div v-else v-for="currency in info" class="currency">
        {{ currency.description }}:
        <span class="lighten">
          <span v-html="currency.symbol"></span
          >{{ currency.rate_float | currencydecimal }}
        </span>
      </div>
    </section>
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
