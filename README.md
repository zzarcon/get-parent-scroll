# react-parent-scroll-provider
> Wraps Components with his closest parent scroll container

### Installation

```
$ yarn add react-parent-scroll-provider
```

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
    return <div />;
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


### How does it work?

- Defaults to document.body
- Won't render children component until **parentScroll** is found