import React from "react";
import { mount } from "enzyme";

import CommentBox from "CommentBox";

let wrapped;

beforeEach(() => wrapped = mount(<CommentBox />));
afterEach(() => wrapped.unmount());

it("has a text area and a button", () => {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(1);
});

describe("the text area", () => {
    const value = "new comment";

    beforeEach(() => {
        const mockEventObject = { target: { value } };
        wrapped.find("textarea").simulate("change", mockEventObject);
        wrapped.update();
    });

    it("has a text area users can type in", () => {
        expect(wrapped.find("textarea").prop("value")).toEqual(value);
    });

    it("clears the textarea when the form is submitted", () => {
        wrapped.find("form").simulate("submit");
        wrapped.update();
        expect(wrapped.find("textarea").prop("value")).toEqual("");
    });
});