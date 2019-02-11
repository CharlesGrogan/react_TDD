import React, { Component } from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create shallow wrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - initial state for setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) {
    wrapper.setState(state);
    return wrapper;
  }
  return shallow(<App {...props} />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute to search.
 * @returns {ShallowWrapper}
 */

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe("<App />", () => {
  test("`App` renders with no errors", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.length).toBe(1);
  });

  test("`App` renders increment button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "increment-button");
    expect(button.length).toBe(1);
  });

  test("`App` renders decrement button", () => {
    const wrapper = setup();
    const decrementButton = findByTestAttr(wrapper, "decrement-button");
    expect(decrementButton.length).toBe(1);
  });

  describe("counter", () => {
    test("`App` renders counter display", () => {
      const wrapper = setup();
      const display = findByTestAttr(wrapper, "counter-display");
      expect(display.length).toBe(1);
    });

    test("counter starts at 0", () => {
      const wrapper = setup();
      const initialCounterState = wrapper.state("counter");
      expect(initialCounterState).toBe(0);
    });

    describe("Button functionality increment + decrement", () => {
      test("clicking button increments counter diplay", () => {
        const counter = 5;
        const wrapper = setup(null, { counter });

        // find button and `click`
        const button = findByTestAttr(wrapper, "increment-button");
        button.simulate("click");
        wrapper.update();

        // find display and test value
        const display = findByTestAttr(wrapper, "counter-display");
        expect(display.text()).toContain(counter + 1);
      });

      test("clicking button decrements counter diplay", () => {
        const counter = 5;
        const wrapper = setup(null, { counter });

        // find button and `click`
        const decrementButton = findByTestAttr(wrapper, "decrement-button");
        decrementButton.simulate("click");
        wrapper.update();

        // find display and test value
        const display = findByTestAttr(wrapper, "counter-display");
        expect(display.text()).toContain(counter - 1);
      });
    });
  });
});
