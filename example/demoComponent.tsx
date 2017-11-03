import * as React from 'react';
import {Component} from 'react';

export default class DemoComponent extends Component<any, any> {
  render() {
    const {parentScroll} = this.props;
    console.log(parentScroll);

    return (
      <div>
        Demo!
      </div>
    );
  }
}