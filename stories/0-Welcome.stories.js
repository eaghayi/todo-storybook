import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import App from '../App.js'

export default {
  title: 'First',
  component: Welcome,
};

export const ToDoApp = () => <App showApp={linkTo('Button')} />;

ToDoApp.story = {
  name: 'ToDoApp',
};

