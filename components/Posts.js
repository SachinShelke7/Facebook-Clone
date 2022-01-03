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
          massage={post.data().massage}
          email={post.data().email}
          timestamp={post.data().timestamp}
          image={post.data().image}
          postImage={post.data().postImage}
        />
        ))}

    </div>
  );
}

export default Posts;
