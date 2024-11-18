"use client";
import React from "react";
import { PostsProvider } from "./PostsContext";

const ContextProvider = ({ children }:{children:React.ReactNode}) => {
  return <PostsProvider>{children}</PostsProvider>;
};

export default ContextProvider;
