"use client";
import { PostsContext } from "@/context/PostsContext";
import { PostType } from "@/types";
import Image from "next/image";
import { FormEvent, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const PublishSection = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const [newPost, setNewPost] = useState<PostType>({
    id: uuidv4(),
    title: "",
    body: "",
    image: "",
    visible: true,
  });

  const handleDropFile = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setNewPost({ ...newPost, image: url });
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files?.[0];
    if (files) {
      const url = URL.createObjectURL(files);
      setNewPost({ ...newPost, image: url });
    }
  };

  const handleClickToLoadImage = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleDeleteImage = () => {
    setNewPost({ ...newPost, image: "" });
  };

  useEffect(() => {
    if (newPost.body.length > 0 && newPost.title.length > 0) {
      setPosts((prevPosts) => [...prevPosts, newPost]);
      setNewPost({
        id: uuidv4(),
        title: "",
        body: "",
        image: "",
        visible: true,
      });
      scrollTo(0,0)
    }
  }, [newPost]);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const title = formData.get("title")?.toString();
    const body = formData.get("body")?.toString();
    if (title && body) {
      setNewPost((prevNewPost) => {
        const updatedNewPost = { ...prevNewPost, title, body };
        return updatedNewPost;
      });
      event.currentTarget.reset();
    }
  };

  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="text-sm_title xl:text-title">Novo Post</h1>
      <form
        className="flex flex-col gap-5 w-[90%] xl:w-[40%] items-center font-quicksand"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          placeholder="Assunto"
          className="px-3 py-2 bg-[#e6e6e6] border border-black rounded-lg w-full placeholder-black focus:outline-none"
          name="title"
          required
        />
        <textarea
          placeholder="Sobre o que quer falar?"
          name="body"
          className="px-3 py-2 bg-[#e6e6e6] border border-black rounded-lg w-full placeholder-black focus:outline-none h-[150px]"
        />
        <div className="flex flex-col w-full gap-5 items-center ">
          <span className="self-start">Incluir foto?</span>
          <div
            className="xl:w-1/2 rounded h-[200px] border-dashed border-black border p-5 flex flex-col items-center justify-center"
            onDrop={(e) => handleDropFile(e)}
            onDragOver={handleDragOver}
          >
            <div className="w-[50px] h-[50px] relative">
              <Image
                src={"/icons/upload_icon.png"}
                alt="upload"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-nowrap">Arraste a imagem aqui</span>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
              placeholder="Ou clique para procurar o arquivo localmente"
            />
            <span
              className="underline cursor-pointer hover:scale-[1.02] duration-300 text-center "
              onClick={handleClickToLoadImage}
            >
              Ou clique para procurar o arquivo localmente
            </span>
          </div>
          {newPost.image.length > 0 && (
            <div className="w-[100px] h-[100px] relative self-start">
              <span
                onClick={handleDeleteImage}
                className="bg-red-500 rounded-full text-white border-black border absolute top-0 right-0 w-[20px] h-[20px] flex items-center justify-center z-[2] cursor-pointer hover:scale-[1.05] duration-300 p-2"
              >
                X
              </span>
              <Image src={newPost.image} alt="image" fill />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-orange text-white px-16 py-2 rounded-lg"
        >
          Publicar
        </button>
      </form>
    </div>
  );
};

export default PublishSection;
