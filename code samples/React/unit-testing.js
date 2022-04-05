/*  JEST => Test Runner
    JSDOM => Running the test using Fake DOM
    Enzyme => Helper plugin by airbnb
*/

// configurations 

// In package.json
/* install 
    "enzyme": "^3.11.0",
    "enzyme-adapter-react-16": "^1.15.6" => 16 is the version of react

    "moduleNameMapper": {
      "^@presentational(.*)$": "<rootDir>/src/components/presentational$1", // used for path aliasing in test files
      "^@container(.*)$": "<rootDir>/src/components/container$1"
    },
*/

// In setupTests.js // will be defined in path.js "testsSetup" key

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// Okay now we can write a test case

// inside  __test__ directory create a file with xxx.test.js

import React from 'react';
import App from 'App';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    expect(div.innerHTML).toContain('hello');
    ReactDOM.unMountComponentAtNode(div);
});

// Enzyme APIS

/**
 * Static => Render a component & return plain html
 * Shallow => Render a given component, not it's child
 * Full Dom => Render All, component + childern
 */

// Okay how do i know my component has another component in it???
import { shallow } from 'enzyme';
import React from 'react';
import App from 'App';
import CommentBox from '@presentational/commentBox';

it('has a commentBox', () => {
    const comp = shallow(<App />);
    expect(comp.find(CommentBox).length).toEqual(1);
});

// Okay how do i reuse a test/ do some things before each test

let wrapper = null;
beforeEach(() => {
    wrapper = shallow(<App />); // will call everytime before 'it'
});

// example of a fullDOM API

import { mount } from 'enzyme';

let wrap;
it('has a commentBox', () => {
    wrap = mount(<App />);
    expect(wrap.find('textarea').length).toEqual(1);
});

// Simulating events

it('has a working textarea', () => {
    // wrap mounted before okay?
    wrap.find('textarea').simulate('change', { target: { value: 'new text' } }); // second object is the mockData passed to onchange event (change event html one not react)
    wrap.update(); // force update
    expect(wrap.find('textarea').prop('value')).toEqual('new text');
});





