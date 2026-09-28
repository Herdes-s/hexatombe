export type Season = {
  logo: string;
  nome: string;
  link: string;
  color: string;
};

export type formas = { name: string; img: string; icon?: string };

export type Personas = {
  mini: string;
  text: string;
  nameGolp1: string;
  PDGolp1: string;
  descriptionGolp1: string;
  nameGolp2: string;
  PDGolp2: string;
  descriptionGolp2: string;
  nameGolp3?: string;
  PDGolp3?: string;
  descriptionGolp3?: string;
  nameGolp4?: string;
  PDGolp4?: string;
  descriptionGolp4?: string;
  arma1?: string;
  descArma1?: string;
  about?: string;
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


