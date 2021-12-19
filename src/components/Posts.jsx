import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const Posts = ({ syncPosts }) => {
  return (
    <div>
      {syncPosts.length ? (
        syncPosts.map((item) => <Post post={item} key={item.id} />)
      ) : (
        <p className="text-center">no posts</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
