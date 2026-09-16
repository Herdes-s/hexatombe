import FadeIn from "../../../hooks/FadeIn";

function Actor(props) {
  return (
    <FadeIn>
      <div className="flex my-2.5 w-full relative">
        <div className="relative flex flex-col items-center rounded-2xl overflow-hidden bg-linear-to-b from-[#1a0000] via-[#300000] to-black shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(150,0,0,0.6)]">
          <img
            className="w-[200px] z-10 transition-all duration-500 hover:scale-105"
            src={props.imgActor}
            alt={props.altActor}
          />
          <div className="absolute inset-0 bg-black/20 z-0" />
          <div className="py-3 text-[15px] font-semibold text-center">
            <h4 className="tracking-widest text-[14px] uppercase text-[#e5e5e5] drop-shadow-[0_0_6px_#ff0000]">
              {props.actor}
            </h4>
          </div>
        </div>
        <div className="relative flex flex-col items-center rounded-2xl overflow-hidden bg-linear-to-b from-[#1a0000] via-[#300000] to-black shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(150,0,0,0.6)]">
          <img
            className="w-[200px] z-10 transition-all duration-500 hover:scale-105"
            src={props.imgPersona}
            alt={props.altPersona}
          />
          <div className="absolute inset-0 bg-black/20 z-0" />
          <div className="tracking-widest text-[14px] uppercase text-[#e5e5e5] drop-shadow-[0_0_6px_#ff0000]">
            <h4>{props.persona}</h4>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default Actor;
