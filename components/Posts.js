import React from "react";
import Post from "./Post";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

function Posts() {
  const [realtimePosts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );

  return (
    <div>
      {realtimePosts?.docs.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          timestamp={post.data().timestamp}
          userimage={post.data().image}
          postImage={post.data().postImage}
        />
        ))}

    </div>
  );
}

export default Posts;
