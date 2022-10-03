
import SimpleWidget from './SimpleWidget.vue';

import { action } from '@storybook/addon-actions';

export default {
  component: SimpleWidget,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'SimpleWidget',
  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [
        "S",
        "M",
        "L"
      ],
    },
    onClick: { action: 'clicked' },
  },
};

export const actionsData = {
  onActiveChange: action('activate-simplewidget'),
};

const Template = args => ({
  components: { SimpleWidget },
  setup() {
    return { args, ...actionsData };
  },
  template: '<SimpleWidget v-bind="args" />',
});
export const Default = Template.bind({});
Default.args = {
  simplewidget: {
    id: '1',
    title: 'Test SimpleWidget',
    state: 'SimpleWidget_INBOX',
  },
};

