// Com mascara
import dalmo from "../assets/images/CardsGlobal/dalmo.webp";
import jae from "../assets/images/CardsGlobal/jae.webp";
import aguiar from "../assets/images/CardsGlobal/aguiar.webp";
import labirinto from "../assets/images/CardsGlobal/labirinto.webp";
import kemi from "../assets/images/CardsGlobal/kemi.webp";
import henri from "../assets/images/CardsGlobal/henri.webp";
// Psikolera
import ale from "../assets/images/CardsGlobal/ale.webp"
import caioTeles from "../assets/images/CardsGlobal/caioTeles.webp"
import cindyLopes from "../assets/images/CardsGlobal/cindyLopes.webp"
import eloy from "../assets/images/CardsGlobal/eloy.webp"
import franco from "../assets/images/CardsGlobal/franco.webp"
import caitoRocha from "../assets/images/CardsGlobal/caito.webp"

// Sem Mascara

import colosso from "../assets/images/CardsGlobal/colosso.webp";
import x from "../assets/images/CardsGlobal/x.webp";
import mutilador from "../assets/images/CardsGlobal/mutilador.webp";
import lab from "../assets/images/CardsGlobal/lab.webp";
import fantasma from "../assets/images/CardsGlobal/fantasma.webp";
import henriCap from "../assets/images/CardsGlobal/henri-capus.webp";
// Psikolera
import aleMasc from "../assets/images/CardsGlobal/aleMasc.webp"
import caioTelesMasc from "../assets/images/CardsGlobal/caioTelesMasc.webp"
import cindyLopesMasc from "../assets/images/CardsGlobal/cindyLopesMasc.webp"
import eloyMasc from "../assets/images/CardsGlobal/eloyMasc.webp"
import francoMasc from "../assets/images/CardsGlobal/francoMasc.webp"
import caitoRochaMasc from "../assets/images/CardsGlobal/caitoMasc.webp"


const AllPersonas = [
  // Macarados
  {
    id: 101,
    info: "Para o agente da Ordem com quem esse assassino trocou de corpo, veja Tuco Belez.",
    sitacao:
      "O sangue podia até pagar bem, mas para Dalmo... a glória era viciante.",
    interprete:
      "Rafael “Cellbit” Lange (Natal Macabro), Richard Abelha (Hexatombe)",
    classe: "Combatente",
    equipe: "Mascarados",
    status: "Morto",
    sobre: [
      {
        sobre01:
          "Dalmo Magno, também conhecido como Colosso, foi um assassino em série, um dos antagonistas do especial Natal Macabro e um dos protagonistas da série Ordem Paranormal, presente em Hexatombe.",
      },
      {
        sobre02:
          "Mais tarde, ele retorna como o Colosso, parte do culto de assassinos de que Jae-Yoon e o Mutilador Noturno participavam, ajudando a trazer pessoas até o Acampamento Lua da Benquerença. Dalmo aparece com seu traje de mergulhador para confrontar Jorge, Jorel e Breno enquanto esses lutavam contra Jae, mas é impedido ao ser atropelado por uma van da Ordem, sendo imobilizado.",
      },
      {
        sobre03:
          "Em Hexatombe, agora com o agente da Ordem Tuco Belez estando em seu corpo, Dalmo foi um dos integrantes da equipe dos Mascarados, usando como base a Mansão Abandonada. Ele acabou morrendo ao ser emboscado pelos Vampiros, tendo seu sangue completamente sugado por Velisar.",
      },
    ],
    formas: [
      {
        name: "Dalmo Magno",
        img: dalmo,
      },
      {
        name: "Colosso",
        img: colosso,
      },
    ],
  },
  {
    id: 102,
    sitacao:
      "Ao encontrar no Sangue a liberdade da rebeldia... Jae matava porque podia.",
    interprete:
      "Rafael “Cellbit” Lange (Natal Macabro), Gabriela Bagi Cattuzzo (Hexatombe)",
    classe: "Especialista",
    equipe: "Mascarados",
    status: "Vivo",
    sobre: [
      {
        sobre01:
          "Jae-Yoon, também conhecide apenas como Jae ou X, é uma assassina em série, um dos antagonistas do especial Natal Macabro e um dos protagonistas da série Ordem Paranormal, presente em Hexatombe.",
      },
      {
        sobre02:
          "Uma figura misteriosa que usa um capuz que cobre o seu rosto, com um X vermelho, é parceira do Mutilador Noturno e Colosso em sua caçada para assassinar pessoas na região de Inquisidor do Vale. Fez sua primeira aparição trancando um grupo de viajantes dentro da Casa Juno e fazendo eles procurarem as chaves das saídas em uma espécie de jogo macabro. Durante a sua caçada, Jae incapacitou e assassinou Ayla. Após os sobreviventes escaparem da casa, passou a espreitá-los, realizando diversos ataques surpresa para feri-los.",
      },
      {
        sobre03:
          "Após atacar e enfraquecer suas vítimas, durante uma perseguição, Jae atacou e sacrificou Mike e Lucio, matando ambos com diversas facadas. Ao fim dos acontecimentos de Natal Macabro, Jae é presa pela Ordem, após ser imobilizada e derrotada. Enquanto é contida, Jae afirma que tem um propósito muito maior do que apenas fazer suas vítimas. Em Hexatombe, Jae é um dos integrantes da equipe dos Mascarados, usando como base a Mansão Abandonada.",
      },
    ],
    formas: [
      {
        name: "Jae-Yoon",
        img: jae,
      },
      {
        name: "X",
        img: x,
      },
    ],
  },
  {
    id: 103,
    sitacao:
      "Ao encontrar no Sangue a liberdade da rebeldia... Jae matava porque podia.",
    interprete:
      "Rafael “Cellbit” Lange (Natal Macabro), Cassiano Cereaw Oliveira (Hexatombe)",
    classe: "Combatente",
    equipe: "Mascarados",
    status: "Vivo",
    sobre: [
      {
        sobre01:
          "Delegado Jonas Aguiar, também conhecido como Mutilador Noturno, é um assassino em série, um dos antagonistas do especial Natal Macabro e um dos protagonistas da série Ordem Paranormal, presente em Hexatombe. Ele faz um trio com X e Colosso para assassinar pessoas na região de Inquisidor do Vale, ainda que o Mutilador Noturno seja o único que é dito ser o responsável pela série de desaparecimentos na região, recebendo seu apelido por sempre caçar suas vítimas durante a noite.",
      },
      {
        sobre02:
          "Ele fez sua primeira aparição caçando os campistas dentro da Casa Juno, onde encontrou e incapacitou Ricardo, e depois matou Leandro a golpes de machado, enquanto ele tentava resgatar seu amigo. Também foi responsável pelas mortes de Lila e Nathalia, matando-as brutalmente e as jogando de um penhasco após incapacitá-las em uma emboscada.",
      },
      {
        sobre03:
          "Ao final dos acontecimentos de Natal Macabro, Aguiar é preso pela Ordem, após ser deixado a deriva no cais do lago do Acampamento. Em Hexatombe, Aguiar é um dos integrantes da equipe dos Mascarados, usando como base a Mansão Abandonada.",
      },
    ],
    formas: [
      {
        name: "Jonas Aguiar",
        img: aguiar,
      },
      {
        name: "Mutilador Noturno",
        img: mutilador,
      },
    ],
  },
  {
    id: 104,
    sitacao:
      "Kemi não se importava com um ideal moral... ela só matava para vencer.",
    interprete: "Beatriz Beamom Pozzebon",
    classe: "Especialista",
    equipe: "Mascarados",
    status: "Vivo",
    sobre: [
      {
        sobre01:
          "Kemi, também conhecida como Fantasma, é uma das protagonistas da série Ordem Paranormal, presente em Hexatombe.",
      },
      {
        sobre02:
          "Kemi é uma mercenária, matando pessoas por dinheiro. Ela teve sua primeira aparição no final da 3ª parte de Natal Macabro, sendo mostrada apenas sua silhueta, junto dos outros assassinos. Ela teve sua aparência revelada no primeiro episódio de Hexatombe, em que aparece em seu apartamento, procurando respostas para sua perda de memória recente.",
      },
      {
        sobre03:
          "Em Hexatombe, Kemi é uma das integrantes da equipe dos Mascarados, usando como base a Mansão Abandonada.",
      },
    ],
    formas: [
      {
        name: "Kemi",
        img: kemi,
      },
      {
        name: "Fantasma",
        img: fantasma,
      },
    ],
  },
  {
    id: 105,
    sitacao:
      "A resposta nunca esperou no final do labirinto, o que espera no final do labirinto é algo muito pior, muito mais terrível; o que espera no final do labirinto... é você.",
    interprete: "Franco Calígrafo Madeira",
    classe: "Ocultista",
    equipe: "Mascarados",
    status: "Vivo",
    sobre: [
      {
        sobre01:
          "Labirinto, também conhecido como ???, é um assassino em série e um dos protagonistas da série Ordem Paranormal, presente em Hexatombe.",
      },
      {
        sobre02:
          "Labirinto é um ocultista que possui uma intensa obsessão pelos formatos e criação de labirintos. Ele teve sua primeira aparição no final da 3ª parte de Natal Macabro, tendo sido mostrada apenas sua silhueta, junto dos outros assassinos. Ele teve sua aparência revelada no primeiro episódio de Hexatombe, em que aparece preso em uma das celas de uma delegacia na cidade de São Paulo.",
      },
      {
        sobre03:
          "No Hexatombe, Labirinto é um dos integrantes da equipe dos Mascarados, usando como base a Mansão Abandonada.",
      },
    ],
    formas: [
      {
        name: "Labirinto",
        img: labirinto,
      },
      {
        name: "???",
        img: lab,
      },
    ],
  },
  {
    id: 106,
    sitacao:
      "Muito emocionante... mas eu avisei vocês, que vocês não iam querer me ver sangrar.",
    classe: "Ocultista",
    ocupacao: "Sacrifício",
    equipe: "Mascarados",
    status: "Vivo",
    sobre: [
      {
        sobre01:
          "Henri, cujo nome original é Lúcio Davo, é um ocultista de Sangue, um dos antagonistas e Escriptas de Kian durante Desconjuração e um dos protagonistas da série Ordem Paranormal, presente em Hexatombe.",
      },
      {
        sobre02:
          "Henri era um dos órfãos do Orfanato Santa Menefreda. Durante seu tempo no local, se tornou um dos amigos mais próximos de Gal, que o induzia a fugir junto com ele do orfanato, causando diversos problemas aos cuidadores do local.[3] Com o tempo se passando, Henri foi crescendo, sendo influenciado por Leonardo Gomes assim como a maioria das crianças do orfanato, se tornando um Escripta obcecado por sangue.",
      },
      {
        sobre03:
          "Durante o Dia Final da Desconjuração, Henri confrontou os agentes da Ordo Realitas encarregados de pará-los e Bruno, que se revelou ser um traidor. Após ser ferido gravemente e ameaçar os agentes de se matar para matar alguns deles, ele é liberado e foge, deixando os agentes prosseguirem. Henri retorna em Calamidade, dentro da cela da Contenção Obscura feita especialmente para Kian, onde ele se revela ser o atual receptáculo da Relíquia de Sangue, compartilhando sua existência com o próprio Diabo. Em Hexatombe, Henri aparece como o sacrifício da equipe dos Mascarados usando como base a Mansão Abandonada.",
      },
    ],
    formas: [
      {
        name: "Henri",
        img: henri,
      },
      {
        name: "Henri",
        img: henriCap,
      },
    ],
  },
  // Psikolera
  {
    id: 107,
    sitacao:
      "Mercenária... ambição... solitária... vingança... ganância... dinheiro... trauma.",
    classe: "Ocultista",
    equipe: "Psikolera",
    status: "Morto",
    sobre: [
      {
        sobre01:
          "Alê foi o tecladista dos PSIKOLERA, uma banda ocultista participante do Hexatombe.",
      },
      {
        sobre02:
          "Elu aparece pela primeira vez durante o 2º episódio de Hexatombe, fazendo o show com a banda. Depois, aparece sem sua máscara pela primeira vez no 4º episódio, quando Kemi e Dalmo visitam sua base no Circo. Alê foi devorado e morto por Zéfero, enquanto tentava proteger Caíto, seu sacríficio.",
      },
      {
        sobre03: "",
      },
    ],
    formas: [
      {
        name: "Ale",
        img: ale,
      },
      {
        name: "Ale",
        img: aleMasc,
      },
    ],
  },
  {
    id: 108,
    sitacao:
      "Prontos pro Show final das Pegadas de Sangue?? Tá chegando!! The Monica Club, P#RRA!!!!!",
    classe: "Ocultista",
    equipe: "Psikolera",
    status: "Morto",
    sobre: [
      {
        sobre01:
          "Caio Teles foi o vocalista dos PSIKOLERA, uma banda ocultista participante do Hexatombe.",
      },
      {
        sobre02:
          "Ele aparece pela primeira vez durante o 2º episódio de Hexatombe, fazendo o show com a banda. Depois, aparece sem sua máscara pela primeira vez no 6° episódio, quando Aguiar, Jae e Labirinto vão até a Budega em busca de alimentos. Caio teve o seu fim na igreja, quando Mutilador Noturno decapitou-o enquanto estava caído no chão.",
      },
      {
        sobre03: "",
      },
    ],
    formas: [
      {
        name: "Caio Teles",
        img: caioTeles,
      },
      {
        name: "Caio Teles",
        img: caioTelesMasc,
      },
    ],
  },
  {
    id: 109,
    sitacao: "Para, Caio! Eu sou baixinha!",
    classe: "Ocultista",
    equipe: "Psikolera",
    status: "Morto",
    sobre: [
      {
        sobre01:
          "Cindy Lopes foi a líder e baixista dos PSIKOLERA, uma banda ocultista participante do Hexatombe.",
      },
      {
        sobre02:
          "Ela aparece pela primeira vez durante o 2º episódio de Hexatombe, fazendo o show com a banda. Depois, aparece sem sua máscara pela primeira vez no 6º episódio, quando Aguiar, Jae e Labirinto vão até a Budega em busca de alimentos. Cindy é morta ao ter a sua cara devorada por Raziel na batalha contra os vampiros.",
      },
      {
        sobre03: "",
      },
    ],
    formas: [
      {
        name: "Cindy Lopes",
        img: cindyLopes,
      },
      {
        name: "Cindy Lopes",
        img: cindyLopesMasc,
      },
    ],
  },
  {
    id: 110,
    sitacao: "O SHOW TÁ CHEGANDO É MELHOR SE PREPARAREM SEUS MERDAS",
    classe: "Ocultista",
    equipe: "Psikolera",
    status: "Vivo",
    sobre: [
      {
        sobre01:
          "Eloy, cujo nome original é Glauber, é o baterista e cofundador dos PSIKOLERA, uma banda ocultista participante do Hexatombe.",
      },
      {
        sobre02:
          "Ele aparece pela primeira vez durante o 2º episódio de Hexatombe, com a mascara em seu rosto, tocando sua bateria ao fazer o show com sua banda. Depois aparece, dessa vez sem sua máscara, pela primeira vez no 4º episódio, quando Kemi e Dalmo visitam sua base no Circo.",
      },
      {
        sobre03: "",
      },
    ],
    formas: [
      {
        name: "Eloy",
        img: eloy,
      },
      {
        name: "Eloy",
        img: eloyMasc,
      },
    ],
  },
  {
    id: 111,
    sitacao: "endo bem honesto... Eu acho que só quero ver o mundo queimar.",
    classe: "Ocultista",
    equipe: "Psikolera",
    status: "Morto",
    sobre: [
      {
        sobre01:
          "Franco foi o guitarrista dos PSIKOLERA, uma banda ocultista participante do Hexatombe.",
      },
      {
        sobre02:
          "Ele apareceu pela primeira vez durante o 2º episódio de Hexatombe, fazendo o show com a banda. Depois, aparece sem sua máscara pela primeira vez no 4º episódio, quando Kemi e Dalmo visitam sua base no Circo.",
      },
      {
        sobre03:
          "Franco foi brutalmente assassinado por Raziel durante a invasão dos Vampiros ao Circo na noite do terceiro dia, tendo sua cabeça arrancada com um único golpe.",
      },
    ],
    formas: [
      {
        name: "Franco",
        img: franco,
      },
      {
        name: "Franco",
        img: francoMasc,
      },
    ],
  },
  {
    id: 112,
    sitacao:
      "A primeira coisa que vocês fazem quando o seu amigo morre é falar do Diabo? Vocês são piores do que eu imaginava.",
    classe: "Ocultista",
    equipe: "Psikolera",
    status: "Morto",
    ocupacao: "Sacrifício",
    sobre: [
      {
        sobre01:
          "Caíto Rocha foi um dos estigmados do Hexatombe, sendo o sacrifício da equipe PSIKOLERA, usando como base o Circo. Teve sua primeira aparição ainda no 2º episódio de Hexatombe com seu rosto estampado em um cartaz de desaparecido que estava pregado na parede do beco atrás de Jeremias.",
      },
      {
        sobre02:
          "Caíto aparece novamente no 4º episódio de Hexatombe dentro da tenda na base dos PSIKOLERA, estando em um tipo de trono dentro de um globo da morte modificado com espinhos e exigindo que trouxessem comida e água para ele, ameaçando se suicidar com um tiro de revólver caso não cumprissem as exigências. Caíto foi morto por Cristino no 8º episodio de Hexatombe, que o degolou, usando-o de sacrifício para uma das portas de Tenebris.",
      },
      {
        sobre03:
          "Após ser levado pelos Mascarados para o bunker onde teve sua vida trocada pela de Pomba, é morto por Cristino com seu facão que corta a garganta de Caíto e mata-o instantaneamente.",
      },
    ],
    formas: [
      {
        name: "Caíto Rocha",
        img: caitoRocha,
      },
      {
        name: "Caíto Rocha",
        img: caitoRochaMasc,
      },
    ],
  },
];

export default AllPersonas;
