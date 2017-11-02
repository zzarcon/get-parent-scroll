# react-parent-scroll-provider
> get hyped

### Usage


```js
import {Component} from 'react';
import ParentScrollProvider from 'react-parent-scroll-provider';

class MyComponent extends Component {
  componentDidMount() {
    const {parentScroll} = this.props;

    parentScroll.addEventListener('scroll', this.onScroll);
  }

  onScroll = (e) => {
    console.log('scrolling...');
  }

  render() {

  }
}


class App extends Component {
  render() {
    return (
      <div style={{overflow: 'auto'}}>
        <div>
          <ParentScrollProvider>
            <MyComponent />
          </ParentScrollProvider>
        </div>
      </div>
    );
  }
}

```