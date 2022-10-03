 import PureSWList from './PureSWList.vue';
 import { action } from '@storybook/addon-actions';

export default {
 component: PureSWList,
 title: 'PureSWList',
  decorators: [
    () => ({ template: '<div style="margin: 3em;"><story/></div>' }),
  ],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args, { argTypes }) => ({
 components: { PureSWList },
 setup() {
    return { args };
  },
 template: '<PureSWList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  widgets: [
    { title: 'Widget 1', value: 1, label: "label 1", size: "S", "activate": true},
    { title: 'Widget 2', value: 10, label: "label 2", size: "S", "activate": true},
    { title: 'Widget 3', value: 10000000, label: "label 3", size: "S", "activate": true},
    { title: 'Widget 4', value: 2, label: "label 4", size: "S" },
    { title: 'Widget 5', value: 20, label: "label 5", size: "S" },
    { title: 'Widget 6', value: 200, label: "label 6", size: "S" }
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  widgets: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
