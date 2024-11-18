import Image from "next/image";
import Link from "next/link";

const icons = [
  {
    src: "/icons/linkedin_include_icon.png",
    alt: "Linkedin Icon",
    href: "https://www.linkedin.com/company/include-engenharia/",
    text: "Linkedin",
  },
  {
    src: "/icons/instagram_include_icon.png",
    alt: "Instagram Icon",
    href: "https://www.instagram.com/engenhariainclude",
    text: "Instagram",
  },
  {
    src: "/icons/email_include_icon.png",
    alt: "Email Icon",
    href: "emailto:include.engenharia@gmail.com",
    text: "Email",
  },
  {
    src: "/icons/facebook_include_icon.png",
    alt: "Facebook Icon",
    href: "https://www.facebook.com/Includejr",
    text: "Facebook'",
  },
];

export default function Home() {
  return (
    <section className="py-10 pl-[5%] flex items-center bg-include_bg h-screen w-full bg-auto">
      <div className="flex flex-col xl:w-2/5 text-white gap-10">
        <div>
          <div className="flex-col flex text-title leading-tight ">
            <h1>Include</h1>
            <h1>Engenharia</h1>
          </div>
          <p className="font-quicksand ">
            A Include Engenharia é uma empresa júnior do Centro de Tecnologia da
            Universidade Federal do Rio Grande do Norte. Somos dedicados à
            promoção da vivência empresarial aos estudantes dos cursos de
            Ciências e Tecnologia, Engenharia da Computação, Engenharia
            Mecatrônica e Engenharia de Telecomunicações
          </p>
        </div>
        <Link
          href={"https://include.ct.ufrn.br/"}
          target="_blank"
          className="font-quicksand bg-blue px-5 w-fit py-2 border-orange border rounded-lg hover:scale-[1.1] duration-300 "
        >
          Saber mais
        </Link>
        <div className="flex gap-5">
          {icons.map((icon) => (
            <Link href={icon.href} key={icon.text} className="hover:scale-[1.1] duration-300 ">
              <Image src={icon.src} alt={icon.alt} width={35} height={35} className="object-cover" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
