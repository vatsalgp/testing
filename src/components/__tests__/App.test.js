import React from 'react';
import { shallow } from "enzyme";

import App from 'App';
import CommentBox from "CommentBox";
import CommentList from "CommentList";

let wrapped;

// Run Before Each Test in this file 
beforeEach(() => {
    // Wrapped Component
    wrapped = shallow(<App />);
});

it('shows a comment box', () => {
    //Returns array of instances
    const boxes = wrapped.find(CommentBox);

    //Expectation
    expect(boxes.length).toEqual(1);
});

it('shows a comment list', () => {
    //Returns array of instances
    const lists = wrapped.find(CommentList);

    //Expectation
    expect(lists.length).toEqual(1);
});

// // Default Try
// import { render } from '@testing-library/react';
// const { getByText } = render(<App />);
// const linkElement = getByText(/learn react/i);
// expect(linkElement).toBeInTheDocument();

// // Try 1
// //Init
// const div = document.createElement("div");
// ReactDOM.render(<App />, div);
// //Test Here
// expect(div.innerHTML).toContain("Comment Box");

// //Cleanup
// ReactDOM.unmountComponentAtNode(div);
