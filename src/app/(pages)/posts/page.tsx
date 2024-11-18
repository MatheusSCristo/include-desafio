"use client";
import { PostsContext } from "@/context/PostsContext";
import Image from "next/image";
import { useContext, useState } from "react";
import PostSection from "./PostSection";
import PublishSection from "./PublishSection";

const Posts = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const [showInvisiblePosts, setShowInvisiblePosts] = useState(false);

  const postsInvisibleCount = posts.filter((post) => !post.visible).length;

  return (
    <section className="min-h-screen bg-white w-screen p-10">
      <div className="relative flex items-center justify-center mb-[100px]">
        <h1 className="text-sm_title xl:text-title">Posts</h1>
        <div className="absolute left-[5%] xl:left-[20%] top-[10%] xl:w-[150px] xl:h-[150px] w-[100px] h-[100px] ">
          <Image
            src={"/stickers/ghosts.png"}
            fill
            alt="Ghosts sticker"
            className=" z-0"
          />
        </div>
        <div className="absolute right-[5%] top-[10%] xl:w-[70px] xl:h-[70px] w-[50px] h-[50px] ">
          <Image
            src={"/stickers/bat.png"}
            fill
            alt="Ghost sticker"
            className=" z-0"
          />
        </div>
      </div>
      <div
        className="flex justify-end w-full font-quicksand my-2 hover:underline cursor-pointer underline-offset-4"
        onClick={() => {
          setShowInvisiblePosts((prevState) => !prevState);
        }}
      >
        <span>
          {showInvisiblePosts ? "Esconder" : "Ver"} posts invisíveis (
          {postsInvisibleCount})
        </span>
      </div>
      <div className="flex flex-col xl:flex-row flex-wrap justify-between gap-y-10 ">
        {posts
          .filter((post) => post.visible || showInvisiblePosts)
          .map((post) => (
            <PostSection key={post.id} post={post} />
          ))}
      </div>
      <PublishSection/>
    </section>
  );
};

export default Posts;
