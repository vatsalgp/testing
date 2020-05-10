import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "components/Header";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

const App = () => (
    <div>
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={CommentList} />
            <Route exact path="/post" component={CommentBox} />
        </BrowserRouter>
    </div>
);

export default App;