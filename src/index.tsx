import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Component, ReactNode, ReactElement} from 'react';
import getParentScroll from './getParentScroll';

export interface ParentScrollProviderProps {
  placeholder?: JSX.Element;
  forceRender?: boolean;
  children?: ReactNode; //TODO: improve definition
}

export interface ParentScrollProviderState {
  parentScroll?: Element;
}

const defaultPlaceholder = <div />;

class ParentScrollProvider extends Component<ParentScrollProviderProps, ParentScrollProviderState> {
  state: ParentScrollProviderState = {
    parentScroll: undefined
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    const parentScroll = getParentScroll(node);

    this.setState({parentScroll});
  }

  renderChildrenWithParentScroll() {
    const {children} = this.props;
    const {parentScroll} = this.state;

    return React.cloneElement(children as ReactElement<any>, {
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