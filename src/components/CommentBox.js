import React from "react";

class CommentBox extends React.Component {

    state = { comment: "" };

    handleChange = event => {
        this.setState({ comment: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();

        // TODO - Call Action Creator
        //Call Action Creator

        this.setState({ comment: "" });
    }

    render = () => (
        <form onSubmit={this.handleSubmit}>
            <h4>Add a Comment</h4>
            <textarea onChange={this.handleChange} value={this.state.comment} />
            <div>
                <button>Submit Comment</button>
            </div>
        </form>
    );
}

export default CommentBox;