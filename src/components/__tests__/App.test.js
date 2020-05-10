import React from 'react';
import { mount } from "enzyme";

import Root from "components/Root";
import App from 'components/App';
import Header from 'components/Header';
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

it('shows a header', () => {
    const wrapped = mount(<Root><App /></Root>);
    const lists = wrapped.find(Header);
    expect(lists.length).toEqual(1);
    wrapped.unmount();
});

it('shows a comment list', () => {
    const wrapped = mount(<Root><App /></Root>);
    const lists = wrapped.find(CommentList);
    expect(lists.length).toEqual(1);
    wrapped.unmount();
});

it('shows a comment box', () => {
    const wrapped = mount(
        <Root initialState={{ auth: true }}>
            <App />
        </Root>
    );

    wrapped.find(".post-btn").hostNodes().simulate("click", { button: 0 });
    wrapped.update();

    const boxes = wrapped.find(CommentBox);
    expect(boxes.length).toEqual(1);
    wrapped.unmount()
});
