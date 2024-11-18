import Image from "next/image";

const ThirdSection = () => {
  return (
    <section className="text-white bg-orange h-fit flex items-center flex-col  relative px-5 ">
      <div className="z-[1] flex flex-col gap-5 items-center">
        <h1 className="xl:text-title text-sm_title text-center ">
          Porquê devo entrar na Include?
        </h1>
        <p className="text-center font-quicksand xl:w-1/2">
          Quero entrar na Include para dar meus primeiros passos no mundo
          profissional em um ambiente de excelência e inovação. Estou em busca
          de um lugar onde possa desenvolver minhas habilidades e aprender com
          profissionais experientes, contribuindo para projetos de impacto. A
          Include representa o ambiente ideal para enfrentar desafios que
          acelerem meu crescimento e me preparem para uma carreira de sucesso.
        </p>
        <div className="font-quicksand flex flex-col gap-2">
          <span>Habilidades que posso oferecer a empresa:</span>
          <ul className="list-disc">
            <li>
              Vontade de aprender e crescer profissionalmente: estou sempre em
              busca de aprimorar conhecimentos e habilidades.
            </li>
            <li>
              Capacidade de trabalhar em equipe e colaborar em projetos
              desafiadores.
            </li>
            <li>
              Organização e disciplina: características que aplico no
              desenvolvimento de projetos e no cumprimento de metas.
            </li>
            <li>
              Resiliência e determinação: sempre busco entender o feedback para
              melhorar e evoluir.
            </li>
          </ul>
        </div>
        <span className="font-quicksand text-center">
          Acredito que essas qualidades me permitiriam contribuir com a equipe
          Include
          <br /> e alcançar meus objetivos profissionais.
        </span>
      </div>
      <div className="absolute right-[5%] top-[10%] xl:w-[250px] xl:h-[250px] w-[100px] h-[100px] ">
        <Image
          src={"/stickers/ghost.png"}
          fill
          alt="Ghost sticker"
          className=" z-0"
        />
      </div>
      <div className="absolute left-[5%] bottom-[5%] xl:bottom-[30%] xl:w-[150px] xl:h-[100px] w-[70px] h-[70px] ">
        <Image
          src={"/stickers/cloud.png"}
          fill
          alt="Cloud sticker"
          className="z-0"
        />
      </div>

      <div className="sticky -bottom-[100%] w-screen h-[100px] xl:h-[350px]">
        <Image src={"/images/footer_cemitery.png"} fill alt="Cemitery image" className="object-cover" />
      </div>
    </section>
  );
};

export default ThirdSection;
