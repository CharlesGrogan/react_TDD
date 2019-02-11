import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

/**
 * Factory Functions that takes two arguments, the wrapper and value to find customer data-attributes
 * @param {object} wrapper - ShallowWrapper created by enzyme to test <App /> component.
 * @param {string} val - The vaue of custome data attribute assigned to node
 * @returns -
 */
const findAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);
let wrapper;

describe("<App /> component", () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test("renders properly to the screen", () => {
    expect(wrapper.length).toBe(1);
  });

  test("loads the proper node [data-test='app-component']", () => {
    expect(findAttr(wrapper, "app-component"));
  });

  test("shows a comment box", () => {
    expect(wrapper.find(CommentBox).length).toEqual(1);
  });

  test("shows the comment list", () => {
    expect(wrapper.find(CommentList).length).toEqual(1);
  });
});
