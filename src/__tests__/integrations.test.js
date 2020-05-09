import React from "react";
import moxios from "moxios";
import { mount } from "enzyme";

import Root from "components/Root";
import App from "components/App";

const url = "https://jsonplaceholder.typicode.com/comments";

const mockedResponse = [
    { name: "expedita libero quos cum commodi ad" },
    { name: "quidem itaque dolores quod laborum aliquid molestiae" },
    { name: "libero beatae consequuntur optio est hic" },
    { name: "occaecati dolor accusantium et quasi architecto aut eveniet fugiat" },
    { name: "consequatur aut ullam voluptas dolorum voluptatum sequi et" }
];

beforeEach(() => {
    moxios.install();
    moxios.stubRequest(url, { status: 200, response: mockedResponse });
});

afterEach(() => moxios.uninstall());

it("can fetch and display a list of comments", done => {
    const wrapped = mount(<Root><App /></Root>);
    wrapped.find(".fetch-comments").simulate("click");
    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find("li").length).toEqual(5);
        done();
        wrapped.unmount();
    });
});