<template>
  <div id="app">
    <SimpleWidget title="Vehículos conectados" :label="labelMsg" :value="value" ></SimpleWidget>
  </div>
</template>
<script>

import SimpleWidget from './components/SimpleWidget.vue';

export default {
  name: 'App',
  components: {
    SimpleWidget,
  },
  data() {
    return {
      hellowWorldMsg : "Welcome to Your Vue.js App",
      labelMsg : "Total conectados",
      value: 0,
    }
  },
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
  },
  mounted(){
    const randomValue = this.getRandomInt(0, 100)
    this.value = randomValue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
