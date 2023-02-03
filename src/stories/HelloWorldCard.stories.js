
import HelloWorldCard from './HelloWorldCard.vue';

export default {
  title: 'Cards/Hello World Card',
  component: HelloWorldCard,
};

const Template = (args, { argTypes }) => ({
  components: { HelloWorldCard },
  template: '<hello-world-card />',
  argTypes,
});

export const Default = Template.bind({});
