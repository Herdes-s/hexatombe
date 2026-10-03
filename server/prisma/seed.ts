import "dotenv/config";

import { PrismaClient } from "../src/generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log("Iniciando seed...");

  // =========================
  // SEASON
  // =========================

  await prisma.season.create({
    data: {
      nome: "Hexatombe",
      logo: "URL_DA_LOGO",
      link: "URL_DA_SEASON",
      color: "#ff0000",

      // =========================
      // PERSONS
      // =========================

      persons: {
        create: [
          {
            info: "Para o agente da Ordem com quem esse assassino trocou de corpo, veja Tuco Belez.",
            sitacao:
              "O sangue podia até pagar bem, mas para Dalmo... a glória era viciante.",
            interprete:
              "Rafael “Cellbit” Lange (Natal Macabro), Richard Abelha (Hexatombe)",
            classe: "Combatente",
            equipe: "Mascarados",
            status: "Morto",
            sobre01:
              "Dalmo Magno, também conhecido como Colosso, foi um assassino em série, um dos antagonistas do especial Natal Macabro e um dos protagonistas da série Ordem Paranormal, presente em Hexatombe.",
            sobre02:
              "Mais tarde, ele retorna como o Colosso, parte do culto de assassinos de que Jae-Yoon e o Mutilador Noturno participavam, ajudando a trazer pessoas até o Acampamento Lua da Benquerença. Dalmo aparece com seu traje de mergulhador para confrontar Jorge, Jorel e Breno enquanto esses lutavam contra Jae, mas é impedido ao ser atropelado por uma van da Ordem, sendo imobilizado.",
            sobre03:
              "Em Hexatombe, agora com o agente da Ordem Tuco Belez estando em seu corpo, Dalmo foi um dos integrantes da equipe dos Mascarados, usando como base a Mansão Abandonada. Ele acabou morrendo ao ser emboscado pelos Vampiros, tendo seu sangue completamente sugado por Velisar.",
            formas: { create: [
              {
                name: "Dalmo Magno",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/dalmo.webp",
              },
              {
                name: "Colosso",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/colosso.webp",
              },
            ] },
          },
          {
            sitacao:
              "Ao encontrar no Sangue a liberdade da rebeldia... Jae matava porque podia.",
            interprete:
              "Rafael “Cellbit” Lange (Natal Macabro), Gabriela Bagi Cattuzzo (Hexatombe)",
            classe: "Especialista",
            equipe: "Mascarados",
            status: "Vivo",
            sobre01:
              "Jae-Yoon, também conhecida apenas como Jae ou X, é uma assassina em série, um dos antagonistas do especial Natal Macabro e um dos protagonistas da série Ordem Paranormal, presente em Hexatombe.",
            sobre02:
              "Uma figura misteriosa que usa um capuz que cobre o seu rosto, com um X vermelho, é parceira do Mutilador Noturno e Colosso em sua caçada para assassinar pessoas na região de Inquisidor do Vale. Fez sua primeira aparição trancando um grupo de viajantes dentro da Casa Juno e fazendo eles procurarem as chaves das saídas em uma espécie de jogo macabro. Durante a sua caçada, Jae incapacitou e assassinou Ayla. Após os sobreviventes escaparem da casa, passou a espreitá-los, realizando diversos ataques surpresa para feri-los.",
            sobre03:
              "Após atacar e enfraquecer suas vítimas, durante uma perseguição, Jae atacou e sacrificou Mike e Lucio, matando ambos com diversas facadas. Ao fim dos acontecimentos de Natal Macabro, Jae é presa pela Ordem, após ser imobilizada e derrotada. Enquanto é contida, Jae afirma que tem um propósito muito maior do que apenas fazer suas vítimas. Em Hexatombe, Jae é um dos integrantes da equipe dos Mascarados, usando como base a Mansão Abandonada.",
            formas: { create: [
              {
                name: "Jae-Yoon",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/jae.webp",
              },
              {
                name: "X",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/x.webp",
              },
            ] },
          },
          {
            sitacao:
              "Ao encontrar no Sangue a liberdade da rebeldia... Jae matava porque podia.",
            interprete:
              "Rafael “Cellbit” Lange (Natal Macabro), Cassiano Cereaw Oliveira (Hexatombe)",
            classe: "Combatente",
            equipe: "Mascarados",
            status: "Vivo",
            sobre01:
              "Delegado Jonas Aguiar, também conhecido como Mutilador Noturno, é um assassino em série, um dos antagonistas do especial Natal Macabro e um dos protagonistas da série Ordem Paranormal, presente em Hexatombe. Ele faz um trio com X e Colosso para assassinar pessoas na região de Inquisidor do Vale, ainda que o Mutilador Noturno seja o único que é dito ser o responsável pela série de desaparecimentos na região, recebendo seu apelido por sempre caçar suas vítimas durante a noite.",
            sobre02:
              "Ele fez sua primeira aparição caçando os campistas dentro da Casa Juno, onde encontrou e incapacitou Ricardo, e depois matou Leandro a golpes de machado, enquanto ele tentava resgatar seu amigo. Também foi responsável pelas mortes de Lila e Nathalia, matando-as brutalmente e as jogando de um penhasco após incapacitá-las em uma emboscada.",
            sobre03:
              "Ao final dos acontecimentos de Natal Macabro, Aguiar é preso pela Ordem, após ser deixado à deriva no cais do lago do Acampamento. Em Hexatombe, Aguiar é um dos integrantes da equipe dos Mascarados, usando como base a Mansão Abandonada.",
            formas: { create: [
              {
                name: "Jonas Aguiar",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/aguiar.webp",
              },
              {
                name: "Mutilador Noturno",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/mutilador.webp",
              },
            ] },
          },
          {
            sitacao:
              "Kemi não se importava com um ideal moral... ela só matava para vencer.",
            interprete: "Beatriz Beamom Pozzebon",
            classe: "Especialista",
            equipe: "Mascarados",
            status: "Vivo",
            sobre01:
              "Kemi, também conhecida como Fantasma, é uma das protagonistas da série Ordem Paranormal, presente em Hexatombe.",
            sobre02:
              "Kemi é uma mercenária, matando pessoas por dinheiro. Ela teve sua primeira aparição no final da 3ª parte de Natal Macabro, sendo mostrada apenas sua silhueta, junto dos outros assassinos. Ela teve sua aparência revelada no primeiro episódio de Hexatombe, em que aparece em seu apartamento, procurando respostas para sua perda de memória recente.",
            sobre03:
              "Em Hexatombe, Kemi é uma das integrantes da equipe dos Mascarados, usando como base a Mansão Abandonada.",
            formas: { create: [
              {
                name: "Kemi",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/kemi.webp",
              },
              {
                name: "Fantasma",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/fantasma.webp",
              },
            ] },
          },
          {
            sitacao:
              "A resposta nunca esperou no final do labirinto, o que espera no final do labirinto é algo muito pior, muito mais terrível; o que espera no final do labirinto... é você.",
            interprete: "Franco Calígrafo Madeira",
            classe: "Ocultista",
            equipe: "Mascarados",
            status: "Vivo",
            sobre01:
              "Labirinto, também conhecido como ???, é um assassino em série e um dos protagonistas da série Ordem Paranormal, presente em Hexatombe.",
            sobre02:
              "Labirinto é um ocultista que possui uma intensa obsessão pelos formatos e criação de labirintos. Ele teve sua primeira aparição no final da 3ª parte de Natal Macabro, tendo sido mostrada apenas sua silhueta, junto dos outros assassinos. Ele teve sua aparência revelada no primeiro episódio de Hexatombe, em que aparece preso em uma das celas de uma delegacia na cidade de São Paulo.",
            sobre03:
              "No Hexatombe, Labirinto é um dos integrantes da equipe dos Mascarados, usando como base a Mansão Abandonada.",
            formas: { create: [
              {
                name: "Labirinto",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/labirinto.webp",
              },
              {
                name: "???",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/lab.webp",
              },
            ] },
          },
          {
            sitacao:
              "Muito emocionante... mas eu avisei vocês, que vocês não iam querer me ver sangrar.",
            classe: "Ocultista",
            ocupacao: "Sacrifício",
            equipe: "Mascarados",
            status: "Vivo",
            sobre01:
              "Henri, cujo nome original é Lúcio Davo, é um ocultista de Sangue, um dos antagonistas e Escriptas de Kian durante Desconjuração e um dos protagonistas da série Ordem Paranormal, presente em Hexatombe.",
            sobre02:
              "Henri era um dos órfãos do Orfanato Santa Menefreda. Durante seu tempo no local, se tornou um dos amigos mais próximos de Gal, que o induzia a fugir junto com ele do orfanato, causando diversos problemas aos cuidadores do local. Com o tempo se passando, Henri foi crescendo, sendo influenciado por Leonardo Gomes assim como a maioria das crianças do orfanato, se tornando um Escripta obcecado por sangue.",
            sobre03:
              "Durante o Dia Final da Desconjuração, Henri confrontou os agentes da Ordo Realitas encarregados de pará-los e Bruno, que se revelou ser um traidor. Após ser ferido gravemente e ameaçar os agentes de se matar para matar alguns deles, ele é liberado e foge, deixando os agentes prosseguirem. Henri retorna em Calamidade, dentro da cela da Contenção Obscura feita especialmente para Kian, onde ele se revela ser o atual receptáculo da Relíquia de Sangue, compartilhando sua existência com o próprio Diabo. Em Hexatombe, Henri aparece como o sacrifício da equipe dos Mascarados usando como base a Mansão Abandonada.",
            formas: { create: [
              {
                name: "Henri",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/henri.webp",
              },
              {
                name: "Transformado",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/henri-capus.webp",
              },
            ] },
          },
          {
            sitacao:
              "Mercenária... ambição... solitária... vingança... ganância... dinheiro... trauma.",
            classe: "Ocultista",
            equipe: "Psikolera",
            status: "Morto",
            sobre01:
              "Alê foi o tecladista dos PSIKOLERA, uma banda ocultista participante do Hexatombe.",
            sobre02:
              "Elu aparece pela primeira vez durante o 2º episódio de Hexatombe, fazendo o show com a banda. Depois, aparece sem sua máscara pela primeira vez no 4º episódio, quando Kemi e Dalmo visitam sua base no Circo. Alê foi devorado e morto por Zéfero, enquanto tentava proteger Caíto, seu sacríficio.",
            sobre03: null,
            formas: { create: [
              {
                name: "Ale",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/ale.webp",
              },
              {
                name: "Mascara",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/aleMasc.webp",
              },
            ] },
          },
          {
            sitacao:
              "Prontos pro Show final das Pegadas de Sangue?? Tá chegando!! The Monica Club, P#RRA!!!!!",
            classe: "Ocultista",
            equipe: "Psikolera",
            status: "Morto",
            sobre01:
              "Caio Teles foi o vocalista dos PSIKOLERA, uma banda ocultista participante do Hexatombe.",
            sobre02:
              "Ele aparece pela primeira vez durante o 2º episódio de Hexatombe, fazendo o show com a banda. Depois, aparece sem sua máscara pela primeira vez no 6° episódio, quando Aguiar, Jae e Labirinto vão até a Budega em busca de alimentos. Caio teve o seu fim na igreja, quando Mutilador Noturno decapitou-o enquanto estava caído no chão.",
            sobre03: null,
            formas: { create: [
              {
                name: "Caio Teles",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/caioTeles.webp",
              },
              {
                name: "Caio Teles",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/caioTelesMasc.webp",
              },
            ] },
          },
          {
            sitacao: "Para, Caio! Eu sou baixinha!",
            classe: "Ocultista",
            equipe: "Psikolera",
            status: "Morto",
            sobre01:
              "Cindy Lopes foi a líder e baixista dos PSIKOLERA, uma banda ocultista participante do Hexatombe.",
            sobre02:
              "Ela aparece pela primeira vez durante o 2º episódio de Hexatombe, fazendo o show com a banda. Depois, aparece sem sua máscara pela primeira vez no 6º episódio, quando Aguiar, Jae e Labirinto vão até a Budega em busca de alimentos. Cindy é morta ao ter a sua cara devorada por Raziel na batalha contra os vampiros.",
            sobre03: null,
            formas: { create: [
              {
                name: "Cindy Lopes",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/cindyLopes.webp",
              },
              {
                name: "Mascara",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/cindyLopesMasc.webp",
              },
            ] },
          },
          {
            sitacao: "O SHOW TÁ CHEGANDO É MELHOR SE PREPARAREM SEUS MERDAS",
            classe: "Ocultista",
            equipe: "Psikolera",
            status: "Vivo",
            sobre01:
              "Eloy, cujo nome original é Glauber, é o baterista e cofundador dos PSIKOLERA, uma banda ocultista participante do Hexatombe.",
            sobre02:
              "Ele aparece pela primeira vez durante o 2º episódio de Hexatombe, com a máscara em seu rosto, tocando sua bateria ao fazer o show com sua banda. Depois aparece, dessa vez sem sua máscara, pela primeira vez no 4º episódio, quando Kemi e Dalmo visitam sua base no Circo.",
            sobre03: null,
            formas: { create: [
              {
                name: "Eloy",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/eloy.webp",
              },
              {
                name: "Mascara",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/eloyMasc.webp",
              },
            ] },
          },
          {
            sitacao: "Eu acho que só quero ver o mundo queimar.",
            classe: "Ocultista",
            equipe: "Psikolera",
            status: "Morto",
            sobre01:
              "Franco foi o guitarrista dos PSIKOLERA, uma banda ocultista participante do Hexatombe.",
            sobre02:
              "Ele apareceu pela primeira vez durante o 2º episódio de Hexatombe, fazendo o show com a banda. Depois, aparece sem sua máscara pela primeira vez no 4º episódio, quando Kemi e Dalmo visitam sua base no Circo.",
            sobre03:
              "Franco foi brutalmente assassinado por Raziel durante a invasão dos Vampiros ao Circo na noite do terceiro dia, tendo sua cabeça arrancada com um único golpe.",
            formas: { create: [
              {
                name: "Franco",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/franco.webp",
              },
              {
                name: "Mascara",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/francoMasc.webp",
              },
            ] },
          },
          {
            sitacao:
              "A primeira coisa que vocês fazem quando o seu amigo morre é falar do Diabo? Vocês são piores do que eu imaginava.",
            classe: "Ocultista",
            equipe: "Psikolera",
            status: "Morto",
            ocupacao: "Sacrifício",
            sobre01:
              "Caíto Rocha foi um dos estigmados do Hexatombe, sendo o sacrifício da equipe PSIKOLERA, usando como base o Circo. Teve sua primeira aparição ainda no 2º episódio de Hexatombe com seu rosto estampado em um cartaz de desaparecido que estava pregado na parede do beco atrás de Jeremias.",
            sobre02:
              "Caíto aparece novamente no 4º episódio de Hexatombe dentro da tenda na base dos PSIKOLERA, estando em um tipo de trono dentro de um globo da morte modificado com espinhos e exigindo que trouxessem comida e água para ele, ameaçando se suicidar com um tiro de revólver caso não cumprissem as exigências. Caíto foi morto por Cristino no 8º episódio de Hexatombe, que o degolou, usando-o de sacrifício para uma das portas de Tenebris.",
            sobre03:
              "Após ser levado pelos Mascarados para o bunker onde teve sua vida trocada pela de Pomba, é morto por Cristino com seu facão que corta a garganta de Caíto e mata-o instantaneamente.",
            formas: { create: [
              {
                name: "Caíto Rocha",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/caito.webp",
              },
              {
                name: "Transformado",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/caitoMasc.webp",
              },
            ] },
          },
          {
            sitacao:
              "Tanta penitência... Não se preocupe... Quando o sino tocar hoje, você vai alcançar a sua liberdade... Você terá sua absolvição.",
            classe: "Ocultista",
            equipe: "Vampiros",
            status: "Morto",
            afinidade: "Sangue",
            trilha: "Monstruoso",
            sobre01:
              "Alvira foi uma integrante dos Vampiros, um dos grupos ocultistas participantes do Hexatombe.",
            sobre02:
              "Ela teve sua primeira aparição no 7º episódio de Hexatombe, junto de três dos seus companheiros Vampiros enquanto invadiam o circo ocupado pelos PSIKOLERA em busca de vingar sua companheira de equipe Sabara.",
            sobre03:
              "Na noite do quinto dia, os sobreviventes dos Mascarados e de PSIKOLERA vão até a Igreja Antiga e começam uma guerra de intenção com os Vampiros. Durante o combate, Alvira é morta por uma Rajada Caótica de Remi, tendo seu corpo borbulhar e ferver até sua morte.",
            formas: { create: [
              {
                name: "Alvira",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/alvira.webp",
              },
            ] },
          },
          {
            sitacao:
              "Eu espero que vocês aproveitem esse banquete tanto quanto a gente!",
            classe: "Combatente",
            equipe: "Vampiros",
            status: "Morto",
            ocupacao: "Sacrifício",
            afinidade: "Sangue",
            trilha: "Monstruoso",
            sobre01:
              "Raziel foi um personagem apresentado no suplemento Sobrevivendo ao Horror, como representante da trilha Monstruoso, em sua vertente do elemento Sangue, da classe Combatente. Em Hexatombe, Raziel foi um integrante dos Vampiros, um dos grupos ocultistas participantes do ritual.",
            sobre02:
              "Ele apareceu pela primeira vez no 7º episódio de Hexatombe, junto de três de seus companheiros para caçar e se vingar dos assassinos de Sabara que estariam no Circo. Ele arranca a cabeça de Franco, fere Juan gravemente mas é interrompido com a realização do sacrifício da noite.",
            sobre03:
              "Na noite do quinto dia, os sobreviventes dos Mascarados e de PSIKOLERA vão até a Igreja Antiga e começam uma guerra de intenção com os Vampiros. Durante o combate, Raziel é morto devorado por Juan.",
            formas: { create: [
              {
                name: "Raziel",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/raziel.webp",
              },
            ] },
          },
          {
            sitacao: "Vocês viram um passarinho passando por aqui?",
            classe: "Combatente",
            equipe: "Vampiros",
            status: "Morto",
            afinidade: "Sangue",
            trilha: "Monstruoso",
            sobre01:
              "Velisar foi um integrante dos Vampiros, um dos grupos ocultistas participantes do Hexatombe.",
            sobre02:
              "Ele teve sua primeira aparição no 6º episódio de Hexatombe, junto de Zéfero, caçando Pomba enquanto andam até a Mansão Abandonada. Velisar retorna depois para atacar o circo dos PSIKOLERA, matando Dalmo.",
            sobre03:
              "Na noite do quinto dia, os sobreviventes dos Mascarados e de PSIKOLERA vão até a Igreja Antiga e começam uma guerra de intenção com os Vampiros. Durante o combate, Velisar é morto por um tiro de Kemi, com seu corpo caindo no penhasco ao redor da igreja.",
            formas: { create: [
              {
                name: "Velisar",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/velisar.webp",
              },
            ] },
          },
          {
            sitacao: "",
            classe: "Combatente",
            equipe: "Vampiros",
            status: "Morto",
            afinidade: "Sangue",
            trilha: "Monstruoso",
            sobre01:
              "Zéfero era um integrante dos Vampiros, um dos grupos ocultistas participantes do Hexatombe.",
            sobre02:
              "Ele teve sua primeira aparição no 6º episódio de Hexatombe, junto de Velisar, caçando Pomba enquanto andam até a Mansão Abandonada.",
            sobre03:
              "Na noite do quinto dia, os sobreviventes dos Mascarados e da PSIKOLERA vão até a Igreja Antiga e começam uma guerra de intenção com os Vampiros. Durante o combate, Zéfero é morto por um ritual de Descarnar conjurado por Juan.",
            formas: { create: [
              {
                name: "Zéfero",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/zefero.webp",
              },
            ] },
          },
          {
            sitacao:
              "Escutar um covarde gritando é o que mais abre o apetite, você não acha?",
            classe: "Batedora",
            equipe: "Vampiros",
            status: "Morto",
            afinidade: "Sangue",
            trilha: "Monstruoso",
            sobre01:
              "Sabara era uma integrante dos Vampiros, um dos grupos ocultistas participantes do Hexatombe. Teve sua única aparição no 4º episódio de Hexatombe, emboscando Aguiar e Henri no cânion e exigindo seus suprimentos para deixá-los passar com vida.",
            sobre02:
              "Sabara acabou sendo morta após Aguiar ter colocado a máscara do Mutilador Noturno e partido seu crânio ao meio. Posteriormente, sua cabeça foi empalada e deixada na passagem do cânion como um sinal de aviso, semelhante a como os vampiros haviam feito anteriormente com a equipe dos Pássaros.",
            sobre03:
              "No terceiro dia de Hexatombe, seus companheiros de equipe: Velisar e Zéfero, estavam caçando Pomba, o que os levou até a Mansão Abandonada da equipe Mascarados. Já na base, após um diálogo entre Velisar com os membros na mansão, os vampiros se retiraram, mas antes deixaram um presente para eles, que era cabeça de Sabara em uma sacola, funcionando como uma armadilha de espinhos que explodiu, machucando gravemente Dalmo Magno, um dos membros da equipe.",
            formas: { create: [
              {
                name: "Sabara",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/sabara.webp",
              },
            ] },
          },
          {
            sitacao:
              "Escutar um covarde gritando é o que mais abre o apetite, você não acha?",
            classe: "Ocultista",
            equipe: "Vampiros",
            status: "Morto",
            ocupacao: "Sacrifício",
            afinidade: "Conhecimento",
            sobre01:
              "Damir Lukic foi um dos protagonistas da série Ordem Paranormal, presente em Calamidade e Hexatombe. Damir era um dos Marcados da equipe de Kian, recrutada por Gal. Damir era um estiloso ocultista, de origem sérvia, que sempre se mantinha próximo a seu irmão gêmeo, Boris Lukic. Sua primeira aparição se deu no 2º episódio de Calamidade, quando participou da invasão Escripta à Mansão da Família Leone, frequentemente reforçando e curando os ferimentos de seu irmão, enquanto permanecia na retaguarda.",
            sobre02:
              "Após perder Boris durante os eventos de Guerreiro, Damir se rebelou e decidiu se juntar com a Equipe Abutres para derrotar Kian. Ao final da batalha, percebendo o que fez e o quanto custaram suas escolhas, ele se desculpou com Carina Leone e partiu como prisioneiro da Ordem para o Brasil.",
            sobre03:
              "Depois de um ano e meio preso nas celas da Base da Ordo Realitas, Damir fez um acordo forçado com seu arqui-inimigo, o Diabo, e surgiu como o sacrifício dos Vampiros durante o Hexatombe, carregando o estigma da Culpa. Ele foi morto e devorado pela própria equipe ao final do quarto dia do ritual, fazendo Raziel carregar o seu estigma.",
            formas: { create: [
              {
                name: "Damir Lukic",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/damirLukic.webp",
              },
            ] },
          },
          {
            sitacao:
              "Eu sei as merdas que você fez! Eu sei que você é a porra do Mutilador Noturno!",
            classe: "Investigadora",
            equipe: "Transtornados",
            status: "Morto",
            sobre01:
              "Cleo Brisa foi uma investigadora da polícia civil de Inquisidor do Vale. Fez sua primeira aparição no primeiro episódio de Hexatombe, encontrando Aguiar em seu escritório e indo com ele até São Paulo atender um chamado da polícia de lá, que solicitava a presença dele em um caso envolvendo o Labirinto.",
            sobre02:
              "Em Hexatombe, Cleo foi jogada à força no portal, se tornando uma das integrantes da equipe dos Transtornados. Ela imediatamente saiu correndo e se separou da equipe, se abrigando na Casa de Taipa. Depois de ter sido transformada em uma vampira por Velisar, no meio da batalha dos Mascarados com os Vampiros, ela tem a sua cabeça explodida após Remi tocar nela.",
            sobre03: null,
            formas: { create: [
              {
                name: "Cleo Brisa",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/cleoBrisa.webp",
              },
            ] },
          },
          {
            sitacao:
              "Não é pessoal, e eu já disse que não me importo com os joguinhos de vocês.",
            classe: "??",
            equipe: "Transtornados",
            status: "Morto",
            sobre01:
              "Cristino era um dos participantes do Hexatombe, sendo integrante da equipe dos Transtornados, mas não querendo fazer parte do jogo. Teve sua primeira aparição no 3º episódio de Hexatombe, sendo visto por Labirinto no topo de uma colina disparando contra o Quibungo que corria em sua direção.",
            sobre02:
              "Posteriormente, ele reaparece no 4º episódio de Hexatombe, batendo na porta da Mansão Abandonada para pedir a ajuda da equipe dos Mascarados, solicitando que eles o ajudassem a emboscar o Quibungo durante a noite, prometendo que seriam recompensados caso o fizessem.",
            sobre03:
              "No último dia de Hexatombe, Cristino se encontra com os sobreviventes do ritual, afim de matar os que restavam até sobrarem seis. Porém, ao tentar matar Argano, Cristino é preso por correntes e é então morto por Juan com seu ritual de Descarnar.",
            formas: { create: [
              {
                name: "Cristino",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/cristino.webp",
              },
            ] },
          },
          {
            sitacao: "",
            classe: "??",
            equipe: "Transtornados",
            status: "Morto",
            sobre01:
              "Giovanni Opspor foi o pai de Gabriel Opspor e dono da empresa que reformou a Escola Nostradamus em A Ordem Paranormal.",
            sobre02:
              "Depois de mencionado na primeira temporada, Giovanni apareceu no Livro de Regras de Ordem Paranormal RPG, numa arte representando os Transtornados. Durante Hexatombe, Giovanni é apresentado como o líder dos Transtornados, presente em uma sala restrita no The Monica Club.",
            sobre03:
              "Em Hexatombe, Giovanni era um dos integrantes da equipe Transtornados, usando como base o Mercado Central. Ele acabou morrendo no último dia do Hexatombe, após ser carbonizado por Remi no corpo de Labirinto.",
            formas: { create: [
              {
                name: "Giovanni Opspor",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/giovanniOpspor.webp",
              },
            ] },
          },
          {
            sitacao: "COLOSSO... EU VIM TE BUSCAR.",
            classe: "??",
            equipe: "Transtornados",
            status: "Morto",
            sobre01:
              "Mosto foi um ocultista e guarda do The Monica Club, sendo um dos Transtornados subordinados de Giovanni Opspor, tendo sua primeira aparição visual no Livro de Regras de Ordem Paranormal RPG, em uma arte representando os Transtornados.",
            sobre02:
              "Posteriormente, em Hexatombe, Mosto faz sua primeira aparição como o segurança na entrada do The Monica Club, controlando a entrada de Transtornados para o show da banda PSIKOLERA, reaparecendo ao final do 2º episódio de Hexatombe, entrando no portal invocado pelo Tributo de Sangue.",
            sobre03:
              "No Hexatombe, Mosto era um dos integrantes da equipe dos Transtornados, usando como base o Mercado Central. Ele foi morto em um combate brutal contra o Colosso, durante a tentativa de atingir sua vingança.",
            formas: { create: [
              {
                name: "Mosto",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/mosto.webp",
              },
            ] },
          },
          {
            sitacao: "Eu engoli a chave...",
            classe: "??",
            equipe: "Transtornados",
            status: "Morto",
            sobre01:
              "Tarrafa era um ocultista e funcionário do The Monica Club, trabalhando sob Giovanni Opspor. Sua primeira aparição foi no Livro de Regras de Ordem Paranormal RPG, em uma arte representando os Transtornados.",
            sobre02:
              "Em Hexatombe, ele aparece causando um congestionamento no banheiro do The Monica Club, após engolir um molho de chaves, contendo a chave para o escritório de Giovanni. Mais tarde, ele ingressa no Portal que leva seu grupo, os Transtornados, para o Hexatombe, onde usariam o Mercado Central como base.",
            sobre03:
              "No primeiro dia do torneio, Tarrafa foi perseguido por uma das outras equipes de ocultistas, sendo empalado por Chispa com uma grande lança e então morto em definitivo por Jae-Yoon.",
            formas: { create: [
              {
                name: "Tarrafa",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/tarrafa.webp",
              },
            ] },
          },
          {
            sitacao: "Eu sou o Nando, eu nunca vou morrer!",
            classe: "??",
            equipe: "Transtornados",
            status: "Morto",
            ocupacao: "Sacrifício",
            sobre01:
              "Nando era um dos estigmados do Hexatombe, sendo o sacrifício da equipe Transtornados, usando como base o Mercado Central. Teve sua primeira aparição no 4º episódio de Hexatombe, se apresentando como o sacrifício dos Transtornados para Dalmo Magno e Kemi durante sua visita à base do grupo.",
            sobre02:
              "Ele foi morto pela própria arma por Kemi, após tentar pegar desprevenido e matar Henri, o sacrifício da equipe dos Mascarados.",
            sobre03: null,
            formas: { create: [
              {
                name: "Nando",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/nando.webp",
              },
            ] },
          },
          {
            sitacao:
              "Gosto de acreditar mais no poder. Acho que a justiça é uma ferramenta que fracos usam pra se acovardar quando eles não têm o que é necessário.",
            classe: "??",
            equipe: "Couraças",
            status: "Desconhecido",
            sobre01:
              "Escarlata foi a líder dos Couraças, um dos grupos ocultistas participantes do Hexatombe.",
            sobre02:
              "Ela apareceu pela primeira vez no 5º episódio de Hexatombe, em sua base no Ferro Velho. Escarlata foi morta por ??? com um ritual de Tempestade Caótica, que a fritou dentro de sua própria armadura e a fez agonizar até a morte.",
            sobre03:
              "Depois da conclusão do Hexatombe, com Argano tendo seu desejo realizado, foi possível ver o crânio de Escarlata sendo restaurado, deixando seu verdadeiro estado atual em uma incógnita.",
            formas: { create: [
              {
                name: "Escarlata",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/escarlata.webp",
              },
            ] },
          },
          {
            sitacao: "Eu te amo.",
            classe: "Combatente",
            equipe: "Couraças",
            status: "Morto",
            sobre01:
              "Ana foi uma integrante dos Couraças, um dos grupos ocultistas participantes do Hexatombe.",
            sobre02:
              "Ana apareceu pela primeira vez no 4º episódio de Hexatombe, junto a Chispa, outro Couraça, se abrigando atrás de seu veículo amadurado se protegendo dos disparos de Cindy no topo do cânion entre o Acampamento dos Pássaros e a Mansão Abandonada. Ana foi morta pelo Mutilador Noturno, que a impediu de se sacrificar por Escarlata, decepando sua mão com seu machado e empalando sua cabeça com sua espada.",
            sobre03: null,
            formas: { create: [
              {
                name: "Ana",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/ana.webp",
              },
            ] },
          },
          {
            sitacao: "Escarlata... Escarlata...!",
            classe: "Combatente",
            equipe: "Couraças",
            status: "Morto",
            sobre01:
              "Argano era um dos integrantes dos Couraças, sendo um dos grupos ocultistas participantes do Hexatombe.",
            sobre02:
              "Argano apareceu pela primeira vez no 4º episódio de Hexatombe, junto a Chispa, outro Couraça, se abrigando atrás de seu veículo amadurado. Em seguida, foi preso por correntes e executado no último dia do ritual, após tentar matar seus oponentes.",
            sobre03: null,
            formas: { create: [
              {
                name: "Argano",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/argano.webp",
              },
            ] },
          },
          {
            sitacao: "¡Lo siento, wey!",
            classe: "Ocultista",
            equipe: "Couraças",
            status: "Morto",
            sobre01:
              "Chispa era um integrante dos Couraças, um dos grupos ocultistas participantes do Hexatombe.",
            sobre02:
              "Teve sua primeira aparição no 3º episódio de Hexatombe, perseguindo Tarrafa na cidade deserta. Ele foi morto pela Fantasma, que acertou um tiro de rifle em um de seus olhos enquanto ele tentava alcançá-la, explodindo seus miolos e fazendo-o bater seu maquinário em uma parede, destroçando seu corpo e armadura por completo.",
            sobre03: null,
            formas: { create: [
              {
                name: "Chispa",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/chispa.webp",
              },
            ] },
          },
          {
            sitacao: "Me mata... me mata..",
            classe: "Ocultista",
            equipe: "Couraças",
            status: "Morto",
            sobre01:
              "Torvo, cujo nome verdadeiro é Tadeu, era um integrante dos Couraças, um dos grupos ocultistas participantes do Hexatombe.",
            sobre02:
              "Torvo era marido de Escarlata e historiador que trabalhava num museu, e devido ao interesse de sua esposa, Torvo contrabandeou armaduras forjadas há séculos que já haviam causado problemas a diversos pesquisadores no começo do século XX para que sua esposa experimentasse uma delas.",
            sobre03:
              "Ele apareceu pela primeira vez no 5º episódio de Hexatombe, em sua base no Ferro-Velho, perambulando enquanto sua esposa Escarlata recebia Labirinto e Jae na base do grupo. Torvo morreu em uma explosão de dinamite causada pelo Mutilador Noturno, que incendiou e carbonizou seu corpo por completo, cozinhando-o dentro da própria armadura.",
            formas: { create: [
              {
                name: "Torvo",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/torvo.webp",
              },
            ] },
          },
          {
            sitacao: "......",
            classe: "??",
            equipe: "Couraças",
            status: "Morto",
            ocupacao: "Sacrifício",
            sobre01:
              "Miasma era um dos estigmados do Hexatombe, sendo o sacrifício da equipe Couraças, usando como base o Ferro Velho. Ele teve a sua primeira aparição no 5º episódio de Hexatombe, sendo arrastado por Escarlata, a líder da equipe, através de correntes.",
            sobre02:
              "Miasma foi morto após o Mutilador Noturno usar uma dinamite para revelá-lo de seu esconderijo, permitindo que ??? conjurasse um ritual de Tempestade Caótica, fritando o sacrifício e matando-o instantaneamente.",
            sobre03: null,
            formas: { create: [
              {
                name: "Miasma",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/miasma.webp",
              },
            ] },
          },
          {
            sitacao:
              "Pássaros só capturam a sua presa se ela estiver distraída.",
            classe: "??",
            equipe: "Pássaros",
            status: "Morto",
            sobre01:
              "Harpia foi o líder da Equipe Pássaros, tendo a responsabilidade de montar planos e estratégias de combate, assim como garantir a segurança de sua equipe e sacrifício, também ficando encarregado de observar os Couraças durante o primeiro dia de Hexatombe.",
            sobre02:
              "Sua primeira aparição foi no 4º episódio de Hexatombe, onde seu braço foi encontrado cravado em sua própria arma por Aguiar e Henri, estando ao lado da cabeça do sacrifício que ele tinha o dever de proteger. Por isso, acreditava-se que ele estava morto desde o primeiro dia do evento.",
            sobre03:
              "Entretanto, ele aparece no último episódio, tentando executar um plano para conseguir sair vivo e realizar o último sacrifício. Quando Pomba comete suicídio e o plano falha, ele se revela e tenta atacar Lena. No meio do confronto, ele é descarnado por Juan e é finalizado com um tiro de Lena.",
            formas: { create: [
              {
                name: "Harpia",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/harpia.webp",
              },
            ] },
          },
          {
            sitacao:
              "Quando você escolhe seu nome, você toma controle da sua vida, quase como voar pela liberdade.",
            classe: "Cartografo",
            equipe: "Pássaros",
            status: "Desconhecido",
            sobre01:
              "Pomba é um dos participantes do Hexatombe, sendo integrante da extinta Equipe Pássaros, que usava como base o Acampamento. Teve sua primeira aparição no 3º episódio de Hexatombe, observando os protagonistas enquanto eles arrumavam a Mansão Abandonada, posteriormente aparecendo correndo na escuridão em direção à base da equipe dos Mascarados.",
            sobre02:
              "Enquanto corria e gritava por socorro, Pomba foi avistado por Kemi e então atingido por um tiro de sniper disparado por ela, que acertou suas costelas e o deixou incapacitado. Após verificarem que não havia mais ninguém no perímetro, ele foi levado para a base da equipe e então interrogado sobre o que havia acontecido, revelando então que toda sua equipe e seu sacrifício haviam sido mortos e devorados pela equipe dos Vampiros.",
            sobre03:
              "No sexto dia, ele decide executar o plano orquestrado por Harpia: quando sobrar seis vivos, ele vai matar o mais fraco, para garantir que dois Pássaros cheguem vivos no final. Quando o momento chega, Pomba decide que ele é o mais fraco de todos os que estão presentes e comete suicídio na frente de seus colegas de equipe. Contudo, no final, é revelado que seus dedos se mexem, deixando seu verdadeiro estado atual desconhecido.",
            formas: { create: [
              {
                name: "Pomba",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/pomba.webp",
              },
            ] },
          },
          {
            sitacao: "",
            classe: "??",
            equipe: "Pássaros",
            status: "Morto",
            ocupacao: "Sacrifício",
            sobre01:
              "Suellen era uma dos estigmados do Hexatombe, sendo o sacrifício da equipe Pássaros, usando como base o Acampamento.",
            sobre02:
              "Sua única aparição foi no 4º episódio de Hexatombe, onde sua cabeça foi encontrada por Aguiar e Henri empalada em frente à barraca de Harpia, ao lado do braço empalado do líder da equipe.",
            sobre03: null,
            formas: {
              create: [
                {
                  name: "Suellen",
                  img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/suellen.webp",
                },
              ],
            },
          },
          {
            sitacao: "",
            classe: "Ocultista",
            equipe: "Pássaros",
            status: "Morto",
            sobre01:
              "Corvo era um ocultista que fazia parte da extinta Equipe Pássaros, onde era responsável pela parte paranormal dos estudos do grupo, investigando sobre como funcionava os sacrifícios e o ritual do Hexatombe.",
            sobre02:
              "Sua única aparição foi no 4º episódio de Hexatombe, onde sua cabeça empalada foi encontrada em frente a sua barraca no Acampamento dos Pássaros por Aguiar e Henri.",
            sobre03: null,
            formas: { create: [
              {
                name: "Corvo",
                img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/corvo.webp",
              },
            ] },
          },
          {
            sitacao: "",
            classe: "Ocultista",
            equipe: "Pássaros",
            status: "Morto",
            sobre01:
              "Coruja era uma historiadora que fazia parte da Equipe Pássaros, sendo responsável pela parte de estudos históricos do grupo, coletando informações sobre eventos ocultistas de grande magnitude, também conseguindo encontrar registros sobre acontecimentos de outros rituais do Hexatombe no passado.",
            sobre02:
              "Ela teve sua única aparição no 4º episódio de Hexatombe, onde sua cabeça foi encontrada por Aguiar e Henri empalada em frente a sua barraca, onde continha diversos quadros e referências à história do Serafim Vermelho.",
            sobre03: null,
            formas: {
              create: [
                {
                  name: "Coruja",
                  img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/coruja.webp",
                },
              ],
            },
          },
          {
            sitacao: "",
            classe: "Ocultista",
            equipe: "Pássaros",
            status: "Morto",
            sobre01:
              "Papagaio era um dos integrantes da Equipe Pássaros, ficando responsável por analisar o comportamento dos integrantes da Equipe PSIKOLERA durante o primeiro dia do Hexatombe.",
            sobre02:
              "Sua única aparição foi no 4º episódio de Hexatombe, tendo sua cabeça encontrada cravada na frente de sua barraca por Aguiar e Henri, junto de suas anotações.",
            sobre03: null,
            formas: {
              create: [
                {
                  name: "Papagaio",
                  img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/papagaio.webp",
                },
              ],
            },
          },
        ],
      },

      // =========================
      // PROTAGONISTS - HEXATOMBE
      // =========================

      protagonists: {
        create: [
          {
            mini: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/dalmo-mini.jpg",
            text: "O sangue poderia até pagar bem, mas para Dalmo, A glória era viciante.",

            golpes: {
              create: [
                {
                  name: "GOLPE DE ARENA",
                  cost: "3 PD",
                  description:
                    "Quando acertar um ataque corpo a corpo, você pode fazer um ataque adicional ou uma manobra.",
                },
                {
                  name: "PRESSÃO ATMOSFÉRICA",
                  cost: "3 PD",
                  description:
                    "Se acertar um ataque você causa dano adicional de energia e o alvo fica atordoado por mais uma rodada.",
                },
              ],
            },

            armas: {
              create: [
                {
                  name: "MANOPLAS DO COLOSSO",
                  description:
                    "Esse par de manoplas amaldiçoadas de energia faz com que cada soco seja acompanhado de pressão atmosférica demolidora.",
                },
              ],
            },

            about:
              "Dalmo, também conhecido como o Colosso, é um combatente conhecido por sua força e resistência.",

            formas: {
              create: [
                {
                  name: "Dalmo",
                  img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/dalmo-icon.png",
                  icon: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/semMasc.jpg",
                },
                {
                  name: "COLOSSO",
                  img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/Colosso-icon.png",
                  icon: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/comMasc.jpg",
                },
              ],
            },
          },

          // =========================
          // JAE
          // =========================

          {
            mini: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/jae-mini.jpg",
            text: "Ao encontrar no sangue o ideal da rebeldia, Jae matava porque podia.",

            golpes: {
              create: [
                {
                  name: "ASSASSINATO FURTIVO",
                  cost: "2 PD",
                  description:
                    "Quando atinge um alvo desprevenido ou que você esteja flanqueando, você causa dano adicional.",
                },
                {
                  name: "ZONA DOS SUSSURROS",
                  cost: "3 PD",
                  description:
                    "Marca uma área com X. Nessa área, recebe bônus em testes de ataque e furtividade.",
                },
              ],
            },

            armas: {
              create: [
                {
                  name: "PUNHAL X",
                  description:
                    "Quando atacar, você pode gastar PD para aplicar uma condição ao alvo.",
                },
              ],
            },

            about:
              "Jae é uma pessoa marcada pelo Outro Lado, conhecida por sua precisão e por sua ligação com fenômenos sobrenaturais.",

            formas: {
              create: [
                {
                  name: "JAE-YOON",
                  img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/jae-icon.png",
                  icon: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/semMasc.jpg",
                },
                {
                  name: "X",
                  img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/x-icon.png",
                  icon: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/comMasc.jpg",
                },
              ],
            },
          },

          // =========================
          // KEMI
          // =========================

          {
            mini: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/kemi-mini.jpg",
            text: "Kemi não se importa com ideal moral, ela se importa com DINHEIRO.",

            golpes: {
              create: [
                {
                  name: "PERITA",
                  cost: "3 PD",
                  description:
                    "Quando faz teste de perícia em que é treinada, pode gastar 3 PD para receber um bônus no teste.",
                },
                {
                  name: "DISPARO DA MORTE",
                  cost: "3 PD",
                  description:
                    "Quando faz um ataque com o fuzil, consegue mirar com precisão letal.",
                },
              ],
            },

            armas: {
              create: [
                {
                  name: "SNIPER DA KEMI",
                  description:
                    "Uma arma especial associada à Kemi e ao elemento Morte.",
                },
              ],
            },

            about:
              "Kemi é uma mercenária conhecida por sua precisão, frieza e ligação com fenômenos do Outro Lado.",

            formas: {
              create: [
                {
                  name: "KEMI",
                  img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/kemi.png",
                  icon: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/semMasc.jpg",
                },
                {
                  name: "FANTASMA",
                  img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/fantasma.png",
                  icon: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/comMasc.jpg",
                },
              ],
            },
          },

          // =========================
          // AGUIAR
          // =========================

          {
            mini: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/aguiar-mini.jpg",
            text: "Aguiar mentia para si mesmo que era a justiça, mas ele matava por esporte.",

            golpes: {
              create: [
                {
                  name: "ATAQUE ESPECIAL",
                  cost: "3 PD",
                  description:
                    "Gasta PD para receber um bônus no teste de ataque e na rolagem de dado.",
                },
                {
                  name: "PREDADOR DE SANGUE",
                  cost: "3 PD",
                  description:
                    "Memoriza o odor de uma vítima, recebendo bônus em testes para rastreá-la, percebê-la e atacá-la.",
                },
              ],
            },

            armas: {
              create: [
                {
                  name: "MACHADO DO MUTILADOR NOTURNO",
                  description:
                    "Uma arma especial associada ao Mutilador Noturno.",
                },
              ],
            },

            about:
              "Aguiar é conhecido por seu instinto de sobrevivência e sua capacidade de agir rapidamente diante de situações perigosas.",

            formas: {
              create: [
                {
                  name: "AGUIAR",
                  img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/aguiar-icon.png",
                  icon: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/semMasc.jpg",
                },
                {
                  name: "MUTILADOR NOTURNO",
                  img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/mutilador-icon.png",
                  icon: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/comMasc.jpg",
                },
              ],
            },
          },

          // =========================
          // LABIRINTO
          // =========================

          {
            mini: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/labirinto-mini.jpg",

            text: "???",

            golpes: {
              create: [
                {
                  name: "RAJADA CAÓTICA",
                  cost: "3 PD",
                  description:
                    "Dispara um raio que causa dano de Energia em um ser de alcance médio.",
                },
                {
                  name: "LABIRINTO MENTAL",
                  cost: "3 PD",
                  description:
                    "Prende a mente do alvo em um labirinto, fazendo com que ele tenha dificuldade para escolher seus movimentos.",
                },
                {
                  name: "CAPTURAR MOMENTO",
                  cost: "3 PD",
                  description:
                    "Marca um local com um símbolo invisível capaz de captar imagens e sons próximos.",
                },
                {
                  name: "MAPA SANGUÍNEO",
                  cost: "3 PD",
                  description:
                    "Cria um mapa capaz de indicar a localização de seres em uma grande área.",
                },
              ],
            },

            armas: {
              create: [],
            },

            about:
              "Ninguém sabe o verdadeiro nome dele. Entre aqueles que já viram as marcas nos corredores, ele é chamado apenas de Labirinto.",

            formas: {
              create: [
                {
                  name: "LABIRINTO",
                  img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/labirinto-icon.png",
                  icon: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/semMasc.jpg",
                },
                {
                  name: "???",
                  img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/lab-icon.png",
                  icon: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/comMasc.jpg",
                },
              ],
            },
          },

          // =========================
          // HENRI
          // =========================

          {
            mini: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/henri-mini.jpg",

            text: "??",

            golpes: {
              create: [
                {
                  name: "??",
                  cost: "??",
                  description: "??",
                },
                {
                  name: "??",
                  cost: "??",
                  description: "??",
                },
              ],
            },

            armas: {
              create: [
                {
                  name: "??",
                  description: "??",
                },
              ],
            },

            about: "Informações sobre Henri ainda não definidas.",

            formas: {
              create: [
                {
                  name: "Henri",
                  img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/henri-icon.png",
                  icon: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/semMasc.jpg",
                },
                {
                  name: "Henri",
                  img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/henriMasc-icon.png",
                  icon: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/comMasc.jpg",
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log("Seed finalizado!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
