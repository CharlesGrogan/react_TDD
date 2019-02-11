import React, { Component } from "react";

class CommentBox extends Component {
  state = { comment: "" };

  handleChange = event => {
    this.setState({ comment: event.target.value });
    // setState() is async!!!! re-renders when it wants - not immediately update component
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}
export default CommentBox;
