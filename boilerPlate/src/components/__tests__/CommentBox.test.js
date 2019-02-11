import React from "react";
import CommentBox from "components/CommentBox";
import { mount } from "enzyme";

let wrapper;
beforeEach(() => {
  wrapper = mount(<CommentBox />);
});

afterEach(() => {
  wrapper.unmount();
});

describe("<CommentBox />", () => {
  test("it has a text area and a button", () => {
    expect(wrapper.find("textarea").length).toEqual(1);
    expect(wrapper.find("button").length).toEqual(1);
  });

  test("has a text are that users can type in", () => {
    wrapper.find("textarea").simulate("change", {
      target: {
        value: "new comment"
      }
    });
    wrapper.update();

    expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
  });
});
