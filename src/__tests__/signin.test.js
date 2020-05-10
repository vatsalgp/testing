import React from "react";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";

import Root from "components/Root";
import Header from "components/Header";

it("can sign in", () => {
    const wrapped = mount(<Root><BrowserRouter><Header /></BrowserRouter></Root>);

    wrapped.find(".sign-btn").simulate("click");
    wrapped.update();

    expect(wrapped.find(".sign-btn").text()).toEqual("Sign Out");

    wrapped.unmount();
});