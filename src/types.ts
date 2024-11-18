export type PostType={
    id:string;
    title:string;
    body:string;
    image:string; 
    visible:boolean;
}

export type PostsContextType = {
    posts: PostType[];
    setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
}