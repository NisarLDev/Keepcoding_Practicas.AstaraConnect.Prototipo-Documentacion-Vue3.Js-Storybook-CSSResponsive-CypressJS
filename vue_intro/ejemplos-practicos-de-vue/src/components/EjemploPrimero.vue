<template>
  <div id="EjemploPrimero">
    <h1>{{ texto_ejemplo }}</h1>
    <p>
     Este es un ejemplo de la estructura de creación de los componentes a partir de una plantilla
    </p>
  </div>
</template>

<script>
export default {
  name: 'EjemploPrimero',
  data() {
    return {
      texto_ejemplo: 'Este es el subtitulo del componente de ejemplo primero'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
