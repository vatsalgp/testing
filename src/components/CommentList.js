import React from "react";
import { connect } from "react-redux";

const CommentList = ({ comments }) => (
    <div>
        <ul>
            {comments.map((comment, index) => <li key={index}>{comment}</li>)}
        </ul>
    </div>
);

export default connect(state => state)(CommentList);