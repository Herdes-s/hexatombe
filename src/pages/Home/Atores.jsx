import bagi from "../../assets/images/persona/outros-persona/bagi.jpg";
import jae from "../../assets/images/persona/outros-persona/jae-persona.jpg";

import abelha from "../../assets/images/persona/outros-persona/Abelha.jpg";
import dalmo from "../../assets/images/persona/outros-persona/dalmo-persona.jpg";

import cereaww from "../../assets/images/persona/outros-persona/cereaww.jpg";
import aguiar from "../../assets/images/persona/outros-persona/aguiar-persona.jpg";

import beamom from "../../assets/images/persona/outros-persona/beamom.jpg";
import kemi from "../../assets/images/persona/outros-persona/kemi-persona.jpg";

import caligrafo from "../../assets/images/persona/outros-persona/caligrafo.jpg";
import labirinto from "../../assets/images/persona/outros-persona/labirinto-persona.jpg";

import bastet from "../../assets/images/persona/outros-persona/Bastet.jpg";
import henri from "../../assets/images/persona/outros-persona/henri.jpg";

import Actor from "./components/Actor";

function Atores() {
  return (
    <section className="w-full" id="elenco">
      <div className="w-[80%] my-10 mx-auto">
        <h2 className=" text-center drop-shadow-[0_0_10px_red] text-black text-[clamp(20px,6vw,80px)] ">
          Atores
        </h2>
        <div className="grid xs:grid-cols-2 grid-col-1 justify-items-center items-center justify-center gap-y-12 drop-shadow-[0_0_20px_#300000] text-white">
          <Actor
            imgActor={bagi}
            actor="Bagi"
            imgPersona={jae}
            persona="Jae-yoon"
          />
          <Actor
            imgActor={abelha}
            actor="Abelha"
            imgPersona={dalmo}
            persona="Dalmo"
          />
          <Actor
            imgActor={cereaww}
            actor="Cereaww"
            imgPersona={aguiar}
            persona="Aguiar"
          />
          <Actor
            imgActor={beamom}
            actor="Beamom"
            imgPersona={kemi}
            persona="Kemi"
          />
          <Actor
            imgActor={caligrafo}
            actor="Caligrafo"
            imgPersona={labirinto}
            persona="Labirinto"
          />
          <Actor
            imgActor={bastet}
            actor="Bastet"
            imgPersona={henri}
            persona="Henri"
          />
        </div>
      </div>
    </section>
  );
}

export default Atores;
