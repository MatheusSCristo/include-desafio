import Image from "next/image";
import Link from "next/link";

const icons = [
  {
    src: "/icons/linkedin_icon.png",
    alt: "Linkedin Icon",
    href: "https://www.linkedin.com/in/matheuscristodev/",
    text: "Linkedin",
  },
  {
    src: "/icons/github_icon.png",
    alt: "Github Icon",
    href: "https://github.com/MatheusSCristo",
    text: "Github",
  },
  {
    src: "/icons/email_icon.png",
    alt: "Email Icon",
    href: "emailto:matheus.cristo1@outlook.com",
    text: "Email",
  },
  {
    src: "/icons/link_icon.png",
    alt: "Portfólio Icon",
    href: "https://portfolio-chi-steel-86.vercel.app/",
    text: "Portólio'",
  },
];

const Footer = () => {
  return (
    <footer className="bg-black flex flex-col items-center justify-center py-[5%] gap-5">
      <div className="flex gap-[30px]">
        {icons.map((icon) => (
          <Link href={icon.href} key={icon.text}>
            <Image
              src={icon.src}
              alt={icon.alt}
              width={50}
              height={50}
            />
          </Link>
        ))}
      </div>
      <div className="flex text-gray gap-5 font-quicksand">
            <Link href={"/"} className="hover:scale-[1.1] duration-300 hover:underline underline-offset-8">Include</Link>
            <Link href={"/about"} className="hover:scale-[1.1] duration-300 hover:underline underline-offset-8">Sobre mim</Link>
            <Link href={"/posts"} className="hover:scale-[1.1] duration-300 hover:underline underline-offset-8">Posts</Link>
      </div>
    </footer>
  );
};

export default Footer;
