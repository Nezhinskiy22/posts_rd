import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Loader from "./Loader";
import Post from "./Post";

const Fetchedposts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const loading = useSelector((state) => state.app.loading);
  return (
    <div>
      <Loader loading={loading} />
      {posts.length ? (
        posts.map((item) => <Post post={item} key={item.id} />)
      ) : (
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(fetchPosts());
          }}
        >
          Завантажити пости
        </button>
      )}
    </div>
  );
};

export default Fetchedposts;
