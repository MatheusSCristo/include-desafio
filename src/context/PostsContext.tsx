import { PostsContextType, PostType } from "@/types";
import { createContext, useState } from "react";

const defaultPosts: PostType[] = [
  {
    id: "1",
    title: "Post 1",
    body: "Projeto de um E-commerce, com o frontend construído em Next, Tailwind e Typescript, oferecemos uma experiência de usuário envolvente e altamente personalizada. Nos bastidores, o backend Java Spring Boot, junto com Spring Security e autenticação JWT, garante segurança e desempenho excepcionais. E para armazenar nossos dados valiosos, é utilizado o PostgreSQL. Juntos, foi possivel criar uma aplicação completa.",
    image: "https://portfolio-chi-steel-86.vercel.app/_next/image?url=%2Fimages%2FBlog.png&w=1920&q=75",
    visible: true,
  },
  {
    id: "2",
    title: "Post 1",
    body: "Projeto de um E-commerce, com o frontend construído em Next, Tailwind e Typescript, oferecemos uma experiência de usuário envolvente e altamente personalizada. Nos bastidores, o backend Java Spring Boot, junto com Spring Security e autenticação JWT, garante segurança e desempenho excepcionais. E para armazenar nossos dados valiosos, é utilizado o PostgreSQL. Juntos, foi possivel criar uma aplicação completa.",
    image: "https://portfolio-chi-steel-86.vercel.app/_next/image?url=%2Fimages%2FBlog.png&w=1920&q=75",
    visible: true,
  },
  {
    id: "3",
    title: "Post 1",
    body: "Projeto de um E-commerce, com o frontend construído em Next, Tailwind e Typescript, oferecemos uma experiência de usuário envolvente e altamente personalizada. Nos bastidores, o backend Java Spring Boot, junto com Spring Security e autenticação JWT, garante segurança e desempenho excepcionais. E para armazenar nossos dados valiosos, é utilizado o PostgreSQL. Juntos, foi possivel criar uma aplicação completa.",
    image: "https://portfolio-chi-steel-86.vercel.app/_next/image?url=%2Fimages%2FBlog.png&w=1920&q=75",
    visible: true,
  },
];

const PostsContext = createContext<PostsContextType>({} as PostsContextType);

const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<PostType[]>(defaultPosts);
  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export { PostsContext, PostsProvider };

