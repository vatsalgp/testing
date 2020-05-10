import React from "react";
import { connect } from "react-redux";

import requireAuth from "components/requireAuth";
import { saveComment, fetchComments } from "actions";

class CommentBox extends React.Component {

    state = { comment: "" };

    handleChange = event => {
        this.setState({ comment: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: "" });
    }

    render = () => (
        <div>
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea
                    onChange={this.handleChange}
                    value={this.state.comment}
                />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            <button
                onClick={this.props.fetchComments}
                className="fetch-comments"
            >
                Fetch Comments
            </button>
        </div>
    );
}

export default connect(null, { saveComment, fetchComments })(requireAuth(CommentBox));