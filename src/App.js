import React from "react";
import Fetchedposts from "./components/FetchedPosts";
import Postform from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <Postform />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронні пости</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Асинхронні пости</h2>
          <Fetchedposts />
        </div>
      </div>
    </div>
  );
}

export default App;
