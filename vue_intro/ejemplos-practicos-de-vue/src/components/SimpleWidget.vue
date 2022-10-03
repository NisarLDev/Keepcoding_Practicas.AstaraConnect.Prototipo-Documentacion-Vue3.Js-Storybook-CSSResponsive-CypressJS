<template>
  <div class="wrapper">
    <div class="header">
      <div class="title">{{title}}</div>
    </div>
    <div class="container"> <!-- Flex container -->
      <div class="value">{{value}}</div> <!-- Flex items -->
      <div class="label">{{label}}</div> <!-- Flex items -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'EjemploSegundo',
  props: {
    title: String,
    value: Number,
    label: String
  },
  data() {
    return {
      texto_ejemplo_2: 'Este es el subtitulo del componente de ejemplo segundo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wrapper {
  background: #CCC;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
}

.title {
  font-size: 20px;
}

.container {
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 400px;
  padding: 0;
}

.value {
  width: 100%;
  padding: 0;
  font-size: 110px;
  font-weight: 900;
}

.label {
  width: 100%;
  padding: 10px  0px 0px  0;
}
</style>
