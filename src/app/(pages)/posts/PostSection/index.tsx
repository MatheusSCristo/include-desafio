import { PostsContext } from "@/context/PostsContext";
import { PostType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const PostSection = ({ post }: { post: PostType }) => {
  const { setPosts } = useContext(PostsContext);

  const handleDeletePost = () => {
    setPosts((prevPosts) =>
      prevPosts.filter((prevPost) => prevPost.id !== post.id)
    );
  };

  const handleToggleVisibility = () => {
    setPosts((prevPosts) =>
      prevPosts.map((prevPost) => {
        if (prevPost.id === post.id) {
          return { ...prevPost, visible: !prevPost.visible };
        }
        return prevPost;
      })
    );
  };

  return (
    <div
      className={` flex items-center flex-col 2xl:flex-row-reverse gap-2 xl:w-[49%] bg-[#fff] p-3 rounded-lg shadow-xl 2xl:h-[250px] overflow-hidden p-5 ${
        !post.visible && "opacity-[0.5]"
      }`}
    >
      {post.image && (
        <div className="relative w-[150px] h-[100px] md:w-[200px] h-[150px] 2xl:w-[350px] 2xl:h-[250px] overflow-hidden ">
          <Image src={post.image} alt={post.title} fill />
        </div>
      )}
      <div className="flex flex-col justify-between flex-1 w-full">
        <div>
          <div className="flex justify-between min-w-0">
            <h2 className="text-[2rem] truncate break-all text-wrap">{post.title}</h2>
            <div
              className="relative min-w-[35px] h-[45px] brightness-[0.85] cursor-pointer hover:scale-[1.05] duration-300"
              onClick={handleDeletePost}
            >
              <Image
                src={"/icons/halloween_trash_icon.png"}
                alt={post.title}
                fill
              />
            </div>
          </div>
          <p className="font-quicksand pl-2 break-all">{post.body.slice(0,250)}...</p>
        </div>
        <div className="flex justify-center p-3 relative items-center w-full ">
          <Link
            href={`posts/${post.id}`}
            className="bg-blue px-16 py-2 rounded text-white font-quicksand hover:scale-[1.05] duration-300 text-nowrap"
          >
            Ver mais
          </Link>
          <div
            className="absolute right-0 w-[25px] h-[25px] cursor-pointer hover:scale-[1.05] duration-300 opacity-[0.6] hover:opacity-[1]"
            onClick={handleToggleVisibility}
          >
            <Image src={"/icons/eye_icon.png"} alt={post.title} fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSection;
