import * as Enzyme from 'enzyme';
import {shallow, mount} from 'enzyme';
import * as React from 'react';
import {Component} from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import ParentScrollProvider from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('ParentScrollProvider', () => {
  it('should not render the children until parentScroll is found', () => {
    expect.assertions(1);

    class Dummy extends Component<any, any> {
      render() {
        const {parentScroll} = this.props;

        expect(parentScroll).toEqual(document.body);

        return <div>foo</div>;
      }
    }

    const app = mount(
      <div>
        <ParentScrollProvider>
          <Dummy />
        </ParentScrollProvider>
      </div>
    );
  });

  it.only('should pass the right element as parentScroll', () => {
    expect.assertions(1);

    class Dummy extends Component<any, any> {
      render() {
        const {parentScroll} = this.props;

        expect(parentScroll.id).toEqual('overflow-element');

        return <div>foo</div>;
      }
    }

    const app = mount(
      <div id="overflow-element" style={{overflow: 'auto'}}>
        <div>
          <ParentScrollProvider>
            <Dummy />
          </ParentScrollProvider>
        </div>
      </div>
    );
  });

  it.skip('should render passed placeholder while parentScroll is not present', () => {

  });
});