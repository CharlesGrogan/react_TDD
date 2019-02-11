import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("The <App /> is created", () => {
  const wrapper = shallow(<App />);
  test("launches without crashing", () => {
    expect(wrapper.find('[data-test="app-component"]')).toBeTruthy();
  });
});
