import { useRouter } from "next/router";

export default function Personagem() {
  const router = useRouter();
  const { id } = router.query;
  
  return <div className="container min-h-[calc(100vh-10.4rem)] my-6 lg:min-h-[calc(100vh-10rem)]">
    <div className="my-4">
      <p className="font-bold">ficha de personagem</p>
      <p>nome do personagem</p>
      <p>raças</p>
      <p>classes e níveis</p>
      <p>alinhamento</p>
      <p>pontos de experiencia</p>
    </div>
    <div className="my-4">
      <p className="font-bold">status</p>
      <p>força</p>
      <p>destreza</p>
      <p>constituição</p>
      <p>inteligência</p>
      <p>sabedoria</p>
      <p>carisma</p>
      <p className="font-bold">obs 1: modificador</p>
      <p className="font-bold">obs 2: salva guarda para cada um deles - boolean</p>
    </div>
    <div className="my-4">
      <p className="font-bold">perícias</p>
      <p>acrobacia</p>
      <p>arcanismo</p>
      <p>atletismo</p>
      <p>atuação</p>
      <p>enganação</p>
      <p>furtividade</p>
      <p>história</p>
      <p>intimidação</p>
      <p>intuição</p>
      <p>investigação</p>
      <p>lidar com animais</p>
      <p>medicina</p>
      <p>natureza</p>
      <p>percepção</p>
      <p>persuasão</p>
      <p>prestidigitação</p>
      <p>religião</p>
      <p>sobrevivência</p>
      <p className="font-bold">obs 1: relacionado aos status</p>
      <p className="font-bold">obs 2: bônus de proficiência - boolean</p>
      <p className="font-bold">obs 3: inspiração - boolean (apenas campanha)</p>
    </div>
    <div className="my-4">
      <p className="font-bold">combate</p>
      <p>armadura</p>
      <p>iniciativa</p>
      <p>deslocamento</p>
      <p>pontos de vida - máximo | atual (apenas campanha) | temporário (apenas campanha)</p>
      <p>dado de vida - com bônus</p>
      <p>saves - sucessos e falhas (apenas campanha)</p>
    </div>
    <div className="my-4">
      <p className="font-bold">inventário</p>
      <p>equipamentos - armas, armaduras e outros</p>
      <p className="font-bold">dinheiro</p>
      <p>PC - peças de cobre</p>
      <p>PP - peças de prata</p>
      <p>PO - peças de ouro</p>
      <p>PL - peças de platina</p>
      <p>DA - diamante ancestral</p>
    </div>
    <div className="my-4">
      <p className="font-bold">ataques e conjurações</p>
      <p>golpes - nome | dano | tipo | bônus de dano | descrição (caso exista)</p>
      <p>magias - 0 à 9</p>
      <p>atributo de conjuração</p>
      <p>cd para evitar magia</p>
      <p>modificador de ataque mágico</p>
    </div>
    <div className="my-4">
      <p className="font-bold">mais do personagem</p>
      <p>outras proficiências</p>
      <p>idiomas</p>
    </div>
    <div className="my-4">
      <p className="font-bold">sobre o personagem</p>
      <p>idade</p>
      <p>altura</p>
      <p>peso</p>
      <p>cor dos olhos</p>
      <p>cor da pele</p>
      <p>cor do cabelo</p>
      <p>aparência - podendo haver imagem</p>
      <p>traços de personalidade</p>
      <p>ideais</p>
      <p>fraquezas</p>
      <p>vínculos</p>
      <p>aliados e organizações - nome e símbolo</p>
      <p>história do personagem</p>
      <p>características e talentos</p>
      <p>tesouros</p>
    </div>
    <div className="w-full px-2 py-1 bg-yellow-300">
      <p className="font-bold">obs:</p>
      <p>edição de informações</p>
    </div>
  </div>
}