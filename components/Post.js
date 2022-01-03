import Image from "next/image";
import React from "react";

function Post({ name, massage, email, postImage, image, timestamp }) {
  
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <Image
            src={image}
            width={40}
            height={40}
            className="rounded-full"
            alt="Profile"
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="pt-4 text-gray-800">{massage}</p>
      </div>
      {postImage && (
          <div className="relative h-56 md:h-96 bg-white">
            <Image src={postImage} objectFit="cover" layout="fill"
            placeholder="Wait Image Loading..." alt="PostImage"
            priority
             />
          </div>
        )}
    </div>
  );
}

export default Post;
