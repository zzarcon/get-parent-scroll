import * as React from 'react';
import {Component} from 'react';
import ParentScrollProvider from '../src';
import DemoComponent from './demoComponent';

export default class App extends Component {
  render() {
    return (
      <div>
        <div style={{overflow: 'auto'}}>
          <div>
            <ParentScrollProvider>
              <DemoComponent />
            </ParentScrollProvider>
          </div>
        </div>
        <ParentScrollProvider>
          <DemoComponent />
        </ParentScrollProvider>
        <ul>
          <li style={{overflowX: 'scroll'}}>
            <ParentScrollProvider>
              <DemoComponent />
            </ParentScrollProvider>
          </li>
          <li style={{overflowY: 'scroll'}}>
            <ParentScrollProvider>
              <DemoComponent />
            </ParentScrollProvider>
          </li>
          <li style={{overflow: 'scroll'}}>
            <ParentScrollProvider>
              <DemoComponent />
            </ParentScrollProvider>
          </li>
        </ul>
      </div>
    );
  }
}