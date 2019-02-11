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

test("it has a text area and a button", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(1);
});

describe("the text area", () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", {
      // select what we want the change to affect aka target.value || target: { value: "new comment" }
      target: {
        value: "new comment"
      }
    });
    // since this.setState() is async update() forces a re-render now.
    wrapper.update();
  });

  test("has a text are that users can type in", () => {
    // assert that 'textarea' on the wrapper has props key called value => make sure its = to 'new comment'
    expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
  });

  test("text area is emptied when the submit btn is clicked", () => {
    // expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
    // not necessary to expect because of above assertion

    wrapper.find("form").simulate("submit");
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});
