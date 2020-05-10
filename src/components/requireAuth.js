import React from "react";
import { connect } from "react-redux";

const requireAuth = ChildComponent => {
    class ComposedComponent extends React.Component {
        componentDidMount() {
            this.shouldNavigateAway();
        }
        componentDidUpdate() {
            this.shouldNavigateAway();
        }
        shouldNavigateAway() {
            if (!this.props.auth)
                this.props.history.push("/");
        }
        render() {
            return <ChildComponent {...this.props} />;
        }
    }
    return connect(({ auth }) => ({ auth }))(ComposedComponent);
};

export default requireAuth;