import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import App from '../App.js'
import Add from '../Add.js'

export default {
  title: 'First',
  component: Welcome,
};

export const ToDoApp = () => <App items = {["default 1"]} showApp={linkTo('Button')} />;
export const AddButton = () => <Add showApp={linkTo('Button')} />;


ToDoApp.story = {
  name: 'ToDoApp',
};

