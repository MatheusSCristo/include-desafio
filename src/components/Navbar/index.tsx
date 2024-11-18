"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "Include", url: "/", icon: "wolf" },
  { name: "Sobre mim", url: "/about", icon: "person" },
  { name: "Posts", url: "/posts", icon: "post" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const currentPath = usePathname();


  return (
    <>
      <nav className="fixed top-0 z-[2] p-2 flex justify-between w-full">
        <Link href={"/"} className="relative w-[65px] h-[65px]">
          <Image
            src={"/images/logo.png"}
            alt="Include Logo"
            fill
            className="object-fit"
          />
        </Link>
        {!isOpen && (
          <div
            className="relative w-[40px] h-[40px] cursor-pointer rounded-lg"
            onClick={() => setIsOpen(true)}
          >
            <Image
              src={"/icons/menu_icon.png"}
              alt="Menu Icon"
              fill
              className={`object-fit ${currentPath =="/posts" && "brightness-0" }`} 
            />
          </div>
        )}
      </nav>
      {isOpen && (
        <div className="font-quicksand flex flex-col fixed top-[5px] right-[5px] z-[2] w-fit p-10 bg-white rounded-l-lg rounded-b-lg">
          <div
            className=" w-[40px] h-[40px] cursor-pointer absolute top-1 right-2"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={"/icons/menu_icon.png"}
              alt="Menu Icon"
              fill
              className="object-fit brightness-0"
            />
          </div>
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.url}
              className={`group flex items-center gap-2 hover:scale-[1.1] duration-300 ${
                currentPath === link.url
                  ? "text-blue font-bold border-b-[3px] border-blue"
                  : "text-black"
              }`}
            >
              <Image
                src={`/icons/${link.icon}_icon.png`}
                alt={link.name}
                width={30}
                height={30}
              />
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
