{
  /* Foto grande */
}
import dalmoIcon from "../assets/images/persona/aleatorias/Dalmo-icon.png";
import jaeIcon from "../assets/images/persona/aleatorias/Jae-icon.png";
import kemiIcon from "../assets/images/persona/aleatorias/Kemi-icon.png";
import aguiarIcon from "../assets/images/persona/aleatorias/Aguiar-icon.png";
import labirintoIcon from "../assets/images/persona/aleatorias/labirinto-icon.png";
import henriIcon from "../assets/images/persona/aleatorias/henri-icon.png";

{
  /* Foto grande com mascaras */
}
import dalmoMascIcon from "../assets/images/persona/aleatorias/Colosso-icon.png";
import jaeMascIcon from "../assets/images/persona/aleatorias/X-icon.jpg";
import kemiMascIcon from "../assets/images/persona/aleatorias/-icon.png";
import aguiarMascIcon from "../assets/images/persona/aleatorias/mutilador-icon.png";
import labirintoMascIcon from "../assets/images/persona/aleatorias/lab-icon.png";

{
  /* Miniaturas */
}
import jae from "../assets/images/persona/outros-persona/jae-persona.jpg";
import dalmo from "../assets/images/persona/outros-persona/dalmo-persona.jpg";
import aguiar from "../assets/images/persona/outros-persona/aguiar-persona.jpg";
import kemi from "../assets/images/persona/outros-persona/kemi-persona.jpg";
import labirinto from "../assets/images/persona/outros-persona/labirinto-persona.jpg";
import henri from "../assets/images/persona/outros-persona/henri.jpg";

const Protagonists = [
  {
    mini: dalmo,
    text: " O sangue poderia até pagar bem, mas para Dalmo, A glória era viciante.",
    nameGolp1: "GOLPE DE ARENA",
    PDGolp1: "3 PD",
    descriptionGolp1:
      "Quando acertar um ataque corpo a corpo, você pode fazer um ataque adicional ou uma manobra.",
    nameGolp2: "PRESSÃO ATMOSFÉRICA",
    PDGolp2: "3 PD",
    descriptionGolp2:
      "Se acertar um ataque você causa +1d10 pontos de dano de energia (+5) e o alvo fica atordoado por mais uma rodada.",
    arma1: "MANOPLAS DO COLOSSO",
    descArma1:
      "Esse par de manoplas amaldiçoadas de energia    faz com que cada soco seja acompanhado de pressão atmosférica demolidora. Elas causam +1d10 (+5) de dano de energia",
    about:
      "Dalmo… ou como a maioria prefere chamar, “o Colosso”. Se você já viu ele de perto, sabe que esse apelido não é exagero — é aviso. Dizem que ele não nasceu forte: foi moldado. Cada marca no corpo dele carrega uma história que ninguém tem coragem de pedir pra ouvir. O Colosso é o tipo de homem que avança quando todos recuam, como se o medo não tivesse lugar dentro dele. Alguns juram que ele já enfrentou criaturas do Outro Lado sozinho e voltou vivo só por teimosia. Ele não fala muito, mas quando olha pra você, parece que está avaliando se você vai aguentar o que está por vir… ou se vai ser só mais um nome nas paredes de algum ritual. Se tem alguém que você quer do seu lado quando o impossível se aproxima, é o Colosso. E se ele estiver contra você? Então é melhor correr antes que ele perceba.",
    formas: [
      {
        img: dalmoIcon,
        name: "Dalmo",
      },
      {
        img: dalmoMascIcon,
        name: "COLOSSO",
      },
    ],
  },
  {
    mini: jae,
    text: " Ao encontrar no sangue o ideal da rebeldia, Jae matava porque podia.",
    nameGolp1: "ASSASSINATO FURTIVO",
    PDGolp1: "2 PD",
    descriptionGolp1:
      "Quando atinge um alvo desprevinido ou que você esteja flanqueando, você causa +3d8 (12) pontos de dano.",
    nameGolp2: "ZONA DOS SUSSURROS",
    PDGolp2: "3 PD",
    descriptionGolp2:
      "Marca uma área com X. Nessa área, recebe +5 em testes de ataque, não sofre penalidade em furtividade após ações chamativas e melhora dano do assassino.",
    arma1: "PUNHAL X",
    descArma1:
      "Quando atacar, você pode gastar 2PD para deixar o alvo desprevinido, se acertar o ataque, o alvo fica cego por 1 rodada.",
    about:
      "Jae é o tipo de pessoa que você percebe antes mesmo de ouvir o nome. Tem um olhar que parece sempre seguir alguma coisa que ninguém mais enxerga. Dizem que ele foi marcado pelo Outro Lado cedo demais, e que desde então carrega uma ligação que nenhum ritual conseguiu cortar. Ele não é dos mais fortes fisicamente, mas compensa com uma precisão quase sobrenatural: Jae nunca desperdiça um movimento, nunca hesita. Alguns acreditam que ele escuta “chamados” durante surtos de influência rituais, e que por isso sempre sabe para onde ir — como se estivesse seguindo um mapa invisível. Trabalhar com Jae é perigoso: você nunca sabe se está sendo guiado por instinto… ou por algo que usa ele como mensageiro. Mas se existe alguém capaz de encontrar uma saída no meio do caos, é ele. Ou pelo menos é isso que todo mundo espera.",
    formas: [
      {
        img: jaeIcon,
        name: "JAE-YOON",
      },
      {
        img: jaeMascIcon,
        name: "X",
      },
    ],
  },
  {
    mini: kemi,
    text: "Kemi não se importa com ideal moral, Ela se importa com DINHEIRO.",
    nameGolp1: "PERITA",
    PDGolp1: "3 PD",
    descriptionGolp1:
      "Quando faz teste de pericia em que é trreinada, você pode gastar 3PD para somar +1d8 no teste.",
    nameGolp2: "DISPARO DA MORTE",
    PDGolp2: "3 PD",
    descriptionGolp2:
      "Quando faz um ataque com o fuzil, você sente o tempo desacelerar, o que permite mirar com precisão letal.",
    arma1: "SNIPER DA KEMI",
    descArma1:
      "A espiral que um projétel disparado por essa arma faz um simbolo de Morte: um ser reduzido a 0PV por essa arma morre em apenas dois turnos(em vez de três).",
    about:
      "A Kemi é o tipo de pessoa que muita gente subestima — e se arrepende depois. Ela carrega um silêncio estranho, não de quem é tímida, mas de quem ouve coisas. Coisas que você torce para nunca ouvir também. Há quem diga que a Kemi enxerga rastros do Outro Lado mesmo quando o véu está fechado. Ela não teme lugares escuros nem os símbolos que fazem outros perderem a sanidade. Na verdade, parece até confortável perto deles. É rápida, precisa e tem uma frieza que não vem da falta de emoção, mas de quem já viu demais. Alguns agentes acreditam que, se um dia o Hexatombe se abrir completamente, Kemi será uma das poucas que vai entender o que está acontecendo — talvez até antes de acontecer. Trabalhar ao lado dela dá segurança… mas também dá a sensação de que, em silêncio, ela sabe algo que você não sabe. E que talvez seja melhor assim.",
    formas: [
      {
        img: kemiIcon,
        name: "KEMI",
      },
      {
        img: kemiMascIcon,
        name: "...",
      },
    ],
  },
  {
    mini: aguiar,
    text: "Aguiar mentia para si mesmo que era a justiça, Mas ele matava por esporte",
    nameGolp1: "ATAQUE ESPECIAL",
    PDGolp1: "3 PD",
    descriptionGolp1:
      "Gasta PD para receber um bônus de +5 no teste de ataque e na rolagem de dado.",
    nameGolp2: "PREDADOR DE SANGUE",
    PDGolp2: "3 PD",
    descriptionGolp2:
      "Memoriza o odor de uma vitima, recebendo +1D em testes para rastreá-la, percebê-la e atacá-la.",
    arma1: "MACHADO DO MUTILADOR NOTURNO",
    descArma1:
      "Quando atinge uma vitima, você pode gastar 1PD para deixá-la sangrando (um ser sangrando perde 1d6 PV por rodada).",
    about:
      "O Aguiar é o tipo de sujeito que não deveria estar vivo depois de tudo que já passou — mas está. E isso diz muito sobre ele. Ele não tem a força do Colosso, nem a sensibilidade ritual da Kemi, nem a precisão guiada do Jae. O que ele tem é algo mais simples… e bem mais perigoso: instinto de sobrevivência bruto, quase animal. Aguiar não recua, não congela, e não perde tempo tentando entender o que está olhando. Ele age. E, por algum motivo, essa impulsividade dele quase sempre leva ao resultado certo. Há rumores de que ele já encarou entidades do Outro Lado de frente, sem ritual, sem preparação, apenas com improviso e coragem. Nada glamuroso — só brutal. Os veteranos dizem que Aguiar não teme o Hexatombe… ou talvez ele tema tanto que aprendeu a atacá-lo antes que ele o engolisse. É difícil saber. O olhar dele é sempre firme, sempre calculando uma rota de fuga, sempre pronto para transformar qualquer coisa ao alcance em arma. Se você está numa situação impossível, cercado por criaturas que não deveriam existir, e alguém diz “o Aguiar tá vindo”… você respira um pouco mais aliviado. Mas também sabe que vai sobreviver porque ele decidiu sobreviver com você. E isso, no fim, é tudo que importa.",
    formas: [
      {
        img: aguiarIcon,
        name: "AGUIAR",
      },
      {
        img: aguiarMascIcon,
        name: "MUTILADOR NOTURNO",
      },
    ],
  },
  {
    mini: labirinto,
    text: "???",
    nameGolp1: "RAJADA CAÓTICA",
    PDGolp1: "3 PD",
    descriptionGolp1:
      "Você dispara um raio que causa 8d8(32) pontos de dano de Energia em um ser de alcance médio.",
    nameGolp2: "LABIRINTO MENTAL",
    PDGolp2: "3 PD",
    descriptionGolp2:
      "Com a mente presa em um labirinto, pelas próximas 1d4 rodadas, o alvo é obrigado a gastar suas ações para se mover em uma direção aleatória.",
    nameGolp3: "CAPTURAR MOMENTO",
    PDGolp3: "3 PD",
    descriptionGolp3:
      "Você marca um local com um símbulo invisível, O símbulo capta imagens e sons proxímos dele. Você pode ver ou ouvir qualquer coisa captada pelo símbulo.",
    nameGolp4: "MAPA SANGUÍNEO",
    PDGolp4: "3 PD",
    descriptionGolp4:
      "Você desenha um mapa com gotas de sangue que sinalizam em tempo real a localização de todos os seres em um raio de 1 km a partir de você.",
    about:
      "Ninguém sabe o verdadeiro nome dele. Entre aqueles que já viram as marcas de sangue nos corredores, ele é chamado apenas de Labirinto. Não porque ele vive em um — mas porque ele é um. Labirinto é uma entidade que distorce o espaço ao redor, dobrando salas, alongando corredores e criando caminhos impossíveis. Onde ele passa, o chão racha em padrões espirais, como se o próprio mundo estivesse tentando copiá-lo… ou fugir dele. Suas linhas são irregulares, como rabiscos feitos por alguém em desespero, sempre vermelhas, sempre frescas — como se acabassem de ser traçadas com um dedo banhado em sangue. Dizem que ele não fala. Ele guia. E nunca para um lugar seguro. A presença dele não é notada pelos olhos primeiro, mas pela sensação: um arrepio de que o caminho que você acabou de passar não existia antes. Pessoas relatam escutar um arrastar suave, como um dedo riscando paredes infinitas. Quando alguém tenta seguir essas marcas, acaba perdido por horas, dias… ou encontra apenas silêncio no final.",
    formas: [
      {
        img: labirintoIcon,
        name: "LABIRINTO",
      },
      {
        img: labirintoMascIcon,
        name: "???",
      },
    ],
  },
  {
    mini: henri,
    text: "??",
    nameGolp1: "??",
    PDGolp1: "??",
    descriptionGolp1: "??",
    nameGolp2: "??",
    PDGolp2: "??",
    descriptionGolp2: "??",
    arma1: "??",
    descArma1: "??",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    formas: [
      {
        img: henriIcon,
        name: "Henri",
      },
      {
        img: henriIcon,
        name: "Henri",
      },
    ],
  },
];

export default Protagonists;
