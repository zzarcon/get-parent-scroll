import * as React from 'react';
import {Component} from 'react';
import ParentScrollProvider from '../src';
import DemoComponent from './demoComponent';

export default class App extends Component {
  render() {
    return (
      <div style={{overflow: 'auto'}}>
        <div>
          <ParentScrollProvider>
            <DemoComponent />
          </ParentScrollProvider>
        </div>
      </div>
    );
  }
}