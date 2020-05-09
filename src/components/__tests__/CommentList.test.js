import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "components/Root";

let wrapped;

const comments = ["First", "Second", "Third"];

beforeEach(() => {
    const RootedList = (
        <Root initialState={{ comments }}>
            <CommentList />
        </Root>
    );
    wrapped = mount(RootedList);
});

afterEach(() => wrapped.unmount());

it("shows one li for each comment", () => {
    expect(wrapped.find("li").length).toEqual(comments.length);
});

it("shows text for each comment", () => {
    for (const comment of comments)
        expect(wrapped.text()).toContain(comment);
});