function CardPersonagem(props) {
  const golpes = [1, 2, 3, 4]
    .map((n) => ({
      name: props[`nameGolp${n}`],
      pd: props[`PDGolp${n}`],
      desc: props[`descriptionGolp${n}`],
      id: n,
    }))
    .filter((g) => g.name);

  return (
    <div className="relative w-full text-white py-5">
      {/* LADO ESQUERDO → Texto */}
      <div>
        <h2 className=" text-center drop-shadow-[0_0_10px_red] text-black text-[clamp(20px,6vw,80px)]">
          {props.name}
        </h2>
        <p className="text-center shadow-[-5px_0_10px_black] text-[clamp(10px,2vw,25px)] ">
          {props.text}
        </p>
      </div>
      <div className="flex">
        {/* outra imagem */}
        <div className="w-[50%] m-auto xs:animate-[motion-top-bottom_15s_ease-in-out_infinite]">
          {/* IMAGEM DO PERSONAGEM */}
          <img
            className="w-[80%] h-auto drop-shadow-[0_0_20px_#300000] "
            src={props.img}
            alt={props.alt}
          />
        </div>

        <div className="flex flex-col gap-2.5 w-[50%] justify-center items-center animate-motion-top-bottom ">
          {/* GOLPES */}

          {golpes.map((golpe) => (
            <div
              key={golpe.id}
              className="xs:w-full w-[300px] drop-shadow-[0_0_20px_#300000]"
            >
              <div className="bg-white text-black flex justify-between items-center py-[3px] px-[5px]  text-[clamp(14px,2vw,20px)]">
                <h3>{golpe.name}</h3>
                <p>{golpe.pd}</p>
              </div>
              <div className="bg-black py-1 px-2  text-[clamp(10px,5vw,16px)]">
                <p>{golpe.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col text-center items-center py-5">
        <div className="w-full flex justify rounded-[10px] drop-shadow-[0_0_20px_#300000]">
          <p className="bg-black py-1.5 px-2.5 text-[clamp(10px,2vw,16px)]">
            {props.about}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardPersonagem;
