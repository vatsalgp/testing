import React from 'react';
import ReactDOM from "react-dom";
import App from '../App';

// import { render } from '@testing-library/react';
// const { getByText } = render(<App />);
// const linkElement = getByText(/learn react/i);
// expect(linkElement).toBeInTheDocument();

it('shows a comment box', () => {
    //Init
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    //Test Here
    expect(div.innerHTML).toContain("Comment Box");

    //Cleanup
    ReactDOM.unmountComponentAtNode(div);
});
