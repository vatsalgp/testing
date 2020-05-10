import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { changeAuth } from "actions";

const Header = ({ changeAuth, auth }) => (
    <div>
        <Link to="/" className="home-btn">
            Home
        </Link>
        <Link to="/post" className="post-btn">
            Post
        </Link>
        <button className="sign-btn" onClick={changeAuth}>
            {auth ? "Sign Out" : "Sign In"}
        </button>
    </div>
);

export default connect(({ auth }) => ({ auth }), { changeAuth })(Header);
