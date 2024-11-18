"use client";
import { PostsContext } from "@/context/PostsContext";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext } from "react";

const PostFullView = ({}) => {
  const params = useParams<{ postId: string }>();

  const { posts } = useContext(PostsContext);
  const post = posts.find((post) => post.id == params.postId);
  console.log(params.postId);
  console.log(posts);

  return (
    <section className="relative min-h-screen flex flex-col items-center mt-[80px] p-10 gap-10">
      <div className="absolute right-[10%] xl:right-[30%] top-[0%] xl:top-[0%] xl:w-[150px] xl:h-[100px] w-[70px] h-[70px] ">
        <Image
          src={"/stickers/cloud.png"}
          fill
          alt="Cloud sticker"
          className="z-0"
        />
      </div>
      <div className="relative flex w-full items-center z-[2]">
        <Link href={"/posts"} className="flex items-center ">
          <Image
            src={"/icons/return_icon.png"}
            width={40}
            height={40}
            className="absolute left-0 "
            alt="Return icon"
          />
        </Link>

        <h1 className="mx-10 text-sm_title 2xl:text-title w-full text-center border-b-[1px] border-black break-all">
          {post?.title}
        </h1>
      </div>
      <div className="flex flex-col font-quicksand z-[2]">
        <div className="flex flex-col-reverse xl:flex-row items-center xl:items-start gap-5 h-fit ">
          <p className="text-wrap break-all z-[2]">{post?.body}</p>
          {post?.image && post.image.length > 0 && (
            <div className="w-[250px] h-[150px] xl:min-w-[600px] xl:h-[450px] relative">
              <Image src={post?.image} alt="Post image" fill />
            </div>
          )}
        </div>
      </div>
      <div className="absolute right-[1%] xl:right-[10%] bottom-[5%] xl:w-[150px] xl:h-[150px] w-[100px] h-[100px] z-[0] opacity-[0.3]">
        <Image src={"/stickers/ghosts.png"} fill alt="Ghosts sticker" />
      </div>
    </section>
  );
};

export default PostFullView;
