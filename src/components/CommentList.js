import React from "react";
import { connect } from "react-redux";

const CommentList = ({ comments }) => (
    <div>
        <h4>Comment List</h4>
        <ul>
            {comments.map((comment, index) => <li key={index}>{comment}</li>)}
        </ul>
    </div>
);

export default connect(({ comments }) => ({ comments }))(CommentList);