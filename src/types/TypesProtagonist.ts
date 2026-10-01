export type Season = {
  logo: string;
  nome: string;
  link: string;
  color: string;
  cast: Cast[];
  personas: Personas[];
};

export type formas = { name: string; img: string; icon?: string };

export type Personas = {
  mini: string;
  text: string;
  golpes: {
    name: string;
    cost: string;
    description: string;
  }[];
  armas: {
    name?: string;
    description?: string;
  }[];
  about: string;
  formas: formas[];
};


export type Cast = {
  id: number;
  info?: string;
  sitacao: string;
  afinidade?: string;
  trilha?: string;
  interprete?: string;
  classe: string;
  ocupacao?: string;
  equipe: string;
  status: string;
  sobre01?: string;
  sobre02?: string;
  sobre03?: string;
  formas: formas[];
};


