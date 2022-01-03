import React from "react";
import Post from "./Post";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

function Posts({ posts }) {
  const [realtimePosts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );

  return (
    <div>
      {realtimePosts ? 
      realtimePosts?.docs.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          massage={post.data().massage}
          email={post.data().email}
          timestamp={post.data().timestamp}
          image={post.data().image}
          postImage={post.data().postImage}
        />
        )) 
        : posts.map((post) => (
            <Post
            key={post.id}
            name={post.name}
            massage={post.massage}
            email={post.email}
            timestamp={post.timestamp}
            image={post.image}
            postImage={post.postImage}
          />
          )
          )}

    </div>
  );
}

export default Posts;
