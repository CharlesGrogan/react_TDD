import React, { Component } from "react";
import App from "./App";
import "../utils/config";
import { shallow } from "enzyme";

describe("<App /> component", () => {
  const wrapper = shallow(<App />);
  const testAttr = wrapper.find('[data-test="component-app"]');
  test("`App` renders properly to DOM", () => {
    expect(wrapper.length).toBe(1);
  });

  test("App component renders with no errors", () => {
    expect(testAttr);
  });
});
