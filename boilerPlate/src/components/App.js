import React from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

const App = () => {
  return (
    <div className="container" data-test="app-component">
      I am the app component
      <span role="img" aria-label="fire emoji">
        🔥
      </span>
      <CommentBox />
      <CommentList />
    </div>
  );
};
export default App;
