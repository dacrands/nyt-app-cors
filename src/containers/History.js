import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchHistory } from "../actions/index";
import { bindActionCreators } from "redux";

class History extends Component {
  componentDidMount() {
    this.props.fetchHistory();
    console.log(this.props.history);
  }

  renderHistory(post) {
    return (
      <div className={"book"}>
        <h3 key={post.title}>{post.title}</h3>
        <p>{post.description}</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className={"container books"}>
          {this.props.history[0]
            ? this.props.history[0].map(this.renderHistory)
            : null}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchHistory }, dispatch);
}

function mapStateToProps({ history }) {
  return { history };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
