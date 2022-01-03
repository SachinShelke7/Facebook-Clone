import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/solid";
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

        {/* footer */}
        <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
          <div className="inputIcon rounded-none rounded-bl-2xl lcs">
            <ThumbUpIcon className="h-4" />
            <p className="text-sm sm:text-base">Like</p>
          </div>
          <div className="inputIcon rounded-none lcs">
            <ChatAltIcon className="h-4" />
            <p className="text-sm sm:text-base">Comment</p>
          </div>
          <div className="inputIcon rounded-none rounded-br-2xl lcs">
            <ShareIcon className="h-4" />
            <p className="text-sm sm:text-base">Share</p>
          </div>

        </div>
    </div>
  );
}

export default Post;
