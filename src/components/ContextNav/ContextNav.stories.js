import React from 'react';
import { storiesOf } from '@storybook/react';
import ContextNav from './ContextNav';

storiesOf('ContextNav', module)
  .add('Platform', () => {
    return (
      <div>
        <ContextNav
          Ascent={'rgb(59, 134, 255);'}
          bgColor={'rgb(242, 242, 242)'}
          Color={'rgb(36, 53, 104);'}
        >
          <a href="#">Menu a</a>
          <a href="#">Menu b</a>
          <a href="#">Menu c</a>
          <a href="#">Menu d</a>
          <a href="#">Menu e</a>
          <a href="#">Menu f</a>
        </ContextNav>
      </div>
    );
  })
  .add('Conciliation', () => {
    return (
      <div>
        <ContextNav Ascent={'#0d4'} bgColor={'rgb(58, 65, 86)'} Color={'#fff'}>
          <a href="#">Menu a</a>
          <a href="#">Menu b</a>
          <a href="#">Menu c</a>
          <a href="#">Menu d</a>
          <a href="#">Menu e</a>
          <a href="#">Menu f</a>
        </ContextNav>
      </div>
    );
  })
  .add('Card', () => {
    return (
      <div>
        <ContextNav Ascent={'#0d4'} bgColor={'#236'} Color={'#fff'}>
          <a href="#">Menu a</a>
          <a href="#">Menu b</a>
          <a href="#">Menu c</a>
          <a href="#">Menu d</a>
          <a href="#">Menu e</a>
          <a href="#">Menu f</a>
        </ContextNav>
      </div>
    );
  });
