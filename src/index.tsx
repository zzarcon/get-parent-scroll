import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Component} from 'react';
import getParentScroll from './getParentScroll';

export interface ParentScrollProviderProps {
  placeholder?: Element;
  forceRender?: boolean;
  children: any; //TODO: improve definition
}

export interface ParentScrollProviderState {
  parentScroll?: HTMLElement;
}

const defaultPlaceholder = <div />;

class ParentScrollProvider extends Component<ParentScrollProviderProps, ParentScrollProviderState> {
  state = {
    
  }
  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    const parentScroll = getParentScroll(node as HTMLElement);

    this.setState({parentScroll});
  }

  renderChildrenWithParentScroll() {
    const {children} = this.props;
    const {parentScroll} = this.state;

    return React.cloneElement(children, {
      parentScroll
    });
  }

  renderPlaceholder() {
    const {placeholder} = this.props;

    return placeholder || defaultPlaceholder;
  }

  render() {
    const {forceRender} = this.props;
    const {parentScroll} = this.state;
    const hasParentScroll = !!parentScroll;

    return (
      hasParentScroll ? this.renderChildrenWithParentScroll() : this.renderPlaceholder()
    );
  }
}

export default ParentScrollProvider;