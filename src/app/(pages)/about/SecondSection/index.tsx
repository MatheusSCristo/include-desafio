import Image from "next/image";

const SecondSection = () => {
  return (
    <section className="text-white bg-orange min-h-[50vh] flex items-center flex-col gap-5 relative p-5 ">
      <h1 className="text-title text-sm_title leading-tight z-[1] text-center ">
        Conheça minhas habilidades
      </h1>
      <div className="font-quicksand flex flex-col gap-3 z-[1]">
        <p>
          Desenvolvimento Web Full Stack: Conhecimento em JavaScript, React,
          Next.js e Tailwind CSS <br /> para interfaces modernas e dinâmicas.
        </p>
        <p>
          Backend com Java e Spring Boot: Experiência na construção de APIs e
          sistemas seguros <br /> com autenticação JWT e integração de serviços.
        </p>
        <p>
          Banco de Dados: Familiaridade com PostgreSQL e MySQL, com prática em
          consultas complexas e <br /> uso do Prisma para facilitar a interação.
        </p>
        <p>
          Docker e Contêineres: Capacidade de configurar ambientes de
          desenvolvimento isolados <br />e escaláveis com Docker, além de
          microserviços.
        </p>
      </div>
      <div className="absolute left-0 top-[10%] xl:w-[250px] xl:h-[250px] w-[100px] h-[100px] ">
        <Image
          src={"/stickers/ghosts.png"}
          fill
          alt="Ghosts sticker"
          className=" z-0"
        />
      </div>
      <div className="absolute right-[5%] top-[5%] xl:w-[100px] xl:h-[100px] w-[50px] h-[50px] ">
        <Image
          src={"/stickers/bat.png"}
          fill
          alt="Ghosts sticker"
          className="z-0"
        />
      </div>
    </section>
  );
};

export default SecondSection;
