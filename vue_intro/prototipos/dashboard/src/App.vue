<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <PureSWList :widgets='SWArray' :loading='false'/>
  </div>
</template>

<script>
import PureSWList from "./components/PureSWList.vue";

export default {
  name: "App",
  components: {
    PureSWList
  },
  data() {
    const numOfWidgets = 4
    const swArray = []
    for(var i=0; i < numOfWidgets; i++){
      swArray.push({
        title: "Title " + (i+1),
        value: i,
        label: "widget label"
      })
    }
    return {
      numOfWidgets : numOfWidgets,
      SWArray: swArray
    }
  },
};
</script>

<style>
@import "./index.css";
</style>
