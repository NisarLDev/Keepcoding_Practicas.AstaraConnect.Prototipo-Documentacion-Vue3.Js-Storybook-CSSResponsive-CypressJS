<template>
  <div :class="`wrapper box-${size}`">
    <div class="header">
      <div :class='`title`'>{{title}}</div>
      <input type="checkbox" ref='selector' @click="select" :checked='active'>
    </div>
    <div :class="`container`"> <!-- Flex container -->
      <div :class='`value typo-${size}`'>{{value}}</div> <!-- Flex items -->
      <div :class="`label typo-${size}`">{{label}}</div> <!-- Flex items -->
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';
export default {
  name: 'EjemploSegundo',
  components: { Button },
  props: {
    title: String,
    value: Number,
    label: String,
    active: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'L'  // S,M,L
    }
  },
  data() {
    return {
      activated: false
    }
  },
  methods: {
    select(value){
      console.log("!! Widget selected", this.$refs.selector.checked)
      this.activated = this.$refs.selector.checked
      this.$emit('onActiveChange', {title: this.title, activated: this.activated})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wrapper {
  display: flex;
  flex-direction: column;
  background: #CCC;
}

.box-L {
  height: 200px;
  max-width: 100%;
  min-width: 300px;
  padding: 0px 20px 15px
}

.box-M {
  height: 150px;
  max-width: 400px;
  min-width: 200px;
  padding: 0px 10px 7px
}

.box-S {
  height: 100px;
  max-width: 300px;
  min-width: 100px;
  padding: 0px 5px 3px
}


.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 20px;
  padding: 10px  0px 5px  0;
}




.container {
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%
}


.typo-L {
  font-size: 50px;
}

.typo-M {
  font-size: 30px;
}

.typo-S {
  font-size: 16px;
}


.value {
  padding: 0;
  font-weight: 900;
}

.label {
  padding: 10px  0px 0px  0;
}
.button{
    text-decoration: none;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    font-family: helvetica;
    font-weight: 300;
    font-size: 25px;
    font-style: italic;
    color: #006505;
    background-color: #82b085;
    border-radius: 15px;
    border: 3px double #006505;
  }
  .button:hover{
    opacity: 0.6;
    text-decoration: none;
  }
</style>
