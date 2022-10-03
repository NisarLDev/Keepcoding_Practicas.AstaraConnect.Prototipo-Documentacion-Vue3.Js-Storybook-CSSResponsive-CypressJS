<template>
  <div class="list-items">
    <template v-if="loading">
      <div v-for="n in 6" :key="n" class="loading-item">
        <span class="glow-checkbox" />
        <span class="glow-text">
          <span>Loading</span> <span>cool</span> <span>state</span>
        </span>
      </div>
    </template>

    <div v-else-if="isEmpty" class="list-items">
      <div class="wrapper-message">
        <span class="icon-check" />
        <p class="title-message">You have no widgets</p>
        <p class="subtitle-message">Sit back and relax</p>
      </div>
    </div>

    <div v-else class="list-items">
      <SimpleWidget
        class="widget"
        v-for="(widget,idx) in widgets"
        :key="idx"
        :title="widget.title"
        :value="widget.value"
        :label="widget.label"
        :size="widget.size"
        :activate="widget.activate"
        @onActiveChange="widgetActivated"
      />
    </div>
  </div>
</template>
<script>
import SimpleWidget from './SimpleWidget';
import { reactive, computed } from 'vue';

export default {
  name: 'PureSWList',
  components: { SimpleWidget },
  props: {
    widgets: { type: Array, required: true, default: () => [] },
    loading: { type: Boolean, default: false },
  },
  setup(props, { emit=0 }) {
    props = reactive(props, emit);
    return {
      isEmpty: computed(() => props.widgets.length === 0),
    };
  },
  methods: {
    widgetActivated(widget){
      console.log("!! List got widget activated event")
      // Print here the widget title
      // Widget activated state
      console.log(widget.title)
      console.log(widget.activated)
    }
  }
};
</script>

<style scoped>
.list-items {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 0;
  gap: 1.5em;

}
.widget {
  width: 100%;
  border: 0;
}
</style>

