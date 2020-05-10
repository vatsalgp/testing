import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { changeAuth } from "actions";

const Header = ({ changeAuth, auth }) => (
    <div>
        <Link to="/">Home</Link>
        <Link to="/post">Post</Link>
        <button onClick={changeAuth}>{auth ? "Sign Out" : "Sign In"}</button>
    </div>
);

export default connect(({ auth }) => ({ auth }), { changeAuth })(Header);
