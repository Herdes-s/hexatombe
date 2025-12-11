import bagi from "../assets/persona/outros-persona/bagi.jpg";
import jae from "../assets/persona/outros-persona/jae-persona.jpg";

import abelha from "../assets/persona/outros-persona/Abelha.jpg";
import dalmo from "../assets/persona/outros-persona/dalmo-persona.jpg";

import cereaww from "../assets/persona/outros-persona/cereaww.jpg";
import aguiar from "../assets/persona/outros-persona/aguiar-persona.jpg";

import beamom from "../assets/persona/outros-persona/beamom.jpg";
import kemi from "../assets/persona/outros-persona/kemi-persona.jpg";

import caligrafo from "../assets/persona/outros-persona/caligrafo.jpg";
import labirinto from "../assets/persona/outros-persona/labirinto-persona.jpg";

import bastet from "../assets/persona/outros-persona/Bastet.jpg";
import henri from "../assets/persona/outros-persona/henri.jpg";

import Actor from "./PersonagemCard/Actor";

function Atores() {
  return (
    <section className="w-full">
      <div className="w-[80%] my-10 mx-auto">
        <div className="grid grid-cols-2 justify-items-center items-center justify-center gap-y-12 drop-shadow-[0_0_20px_#300000]">
          <Actor imgActor={bagi} actor="Bagi" imgPersona={jae} persona="Jae-yoon" />
          <Actor imgActor={abelha} actor="Abelha" imgPersona={dalmo} persona="Dalmo" />
          <Actor imgActor={cereaww} actor="Cereaww" imgPersona={aguiar} persona="Aguiar" />
          <Actor imgActor={beamom} actor="Beamom" imgPersona={kemi} persona="Kemi" />
          <Actor imgActor={caligrafo} actor="Caligrafo" imgPersona={labirinto} persona="Labirinto" />
          <Actor imgActor={bastet} actor="Bastet" imgPersona={henri} persona="Henri" />
        </div>
      </div>
    </section>
  );
}

export default Atores;
