import React from 'react';
import { Story, Meta } from '@storybook/react';

import Container, { ContainerProps } from './container';

export default {
  title: 'Component/Container',
  component: Container,
  argTypes: {},
} as Meta;

const Template: Story<ContainerProps> = (args) => {
  return (
    <Container {...args}>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </Container>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  height: 'initial',
  maxW: '640px',
  fluid: false,
  m: '0',
  p: '0',
};
