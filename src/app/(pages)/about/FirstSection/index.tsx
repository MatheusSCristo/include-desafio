import Image from "next/image";

const FirstSection = () => {
  return (
    <section className="bg-orange xl:h-screen min-h-screen relative">
      <div className="h-full relative p-5 flex flex-col items-center xl:items-start ">
        <div className="flex-1 flex flex-col justify-center items-center xl:flex-row xl:gap-[150px]  top-[20%] xl:left-[20%] ">
          <div className="flex order-last xl:order-1 flex-col gap-5 xl:w-2/5 justify-center items-center text-white">
            <div className="flex flex-col text-sm_title xl:text-title items-center leading-tight">
              <h1>Sou</h1>
              <h1>Matheus Senas</h1>
            </div>
            <p className="font-quicksand">
              Olá! Sou estudante de Tecnologia da Informação na Universidade
              Federal do Rio Grande do Norte (UFRN). Minha trajetória acadêmica
              é marcada por uma busca constante por conhecimento e aprimoramento
              nas áreas de desenvolvimento web e backend. Em paralelo, também
              venho participando de projetos práticos e desafiadores, desde
              microserviços até sistemas de planejamento de disciplinas, cada um
              contribuindo para ampliar minha capacidade de entregar soluções
              tecnológicas de valor.
            </p>
          </div>
          <div className="w-[300px] h-[300px] relative xl:order-last ">
            <Image
              src={"/images/photo.png"}
              alt="Matheus Senas Photo"
              fill
              className="rounded-full "
            />
          </div>
        </div>
        <div className="w-[200px] h-[200px] md:w-[500px] md:h-[500px] xl:w-[600px] xl:h-[600px] relative bottom-0 left-0 flex ">
          <Image
            src={"/stickers/ghosts_fantasy.png"}
            alt="Ghosts"
            fill
            className="object-contain "
          />
        </div>
      </div>
      <Image
        src={"/stickers/bats.png"}
        alt="Bats"
        width={600}
        height={500}
        className="right-[5%] top-[5%] absolute hidden xl:block"
      />
    </section>
  );
};

export default FirstSection;
