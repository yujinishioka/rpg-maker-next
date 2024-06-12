import { useRouter } from "next/router";

export default function Personagem() {
  const router = useRouter();
  const { id } = router.query;
  return <div className="container min-h-[calc(100vh-10.4rem)] my-6 lg:min-h-[calc(100vh-10rem)]">
    <div className="my-4">
      <p className="font-bold">Character sheets</p>
      <p className="font-bold">id: {id}</p>
      <p>character´s name</p>
      <p>races</p>
      <p>class and level</p>
      <p>alignment</p>
      <p>exp</p>
    </div>
    <div className="my-4">
      <p className="font-bold">status</p>
      <p>strengh</p>
      <p>dexterity</p>
      <p>constitution</p>
      <p>intelligence</p>
      <p>wisdom</p>
      <p>charisma</p>
      <p className="font-bold">obs 1: modifier</p>
      <p className="font-bold">obs 2: saving throws - boolean</p>
    </div>
    <div className="my-4">
      <p className="font-bold">skills</p>
      <p>acrobatics (DEX)</p>
      <p>animal handling (WIS)</p>
      <p>arcana (INT)</p>
      <p>athletics (STR)</p>
      <p>deception (CHA)</p>
      <p>history (INT)</p>
      <p>insight (WIS)</p>
      <p>intimidation (CHA)</p>
      <p>investigation (INT)</p>
      <p>medicine (WIS)</p>
      <p>nature (INT)</p>
      <p>perception (WIS)</p>
      <p>performance (CHA)</p>
      <p>persuasion (CHA)</p>
      <p>religion (INT)</p>
      <p>sleigth of hand (DEX)</p>
      <p>stealth (DEX)</p>
      <p>survival (WIS)</p>
      <p className="font-bold">obs 1: relacionado aos status</p>
      <p className="font-bold">obs 2: bonus - boolean</p>
      <p className="font-bold">obs 3: inspiration - boolean (apenas campanha)</p>
    </div>
    <div className="my-4">
      <p className="font-bold">combat</p>
      <p>armor</p>
      <p>initiative</p>
      <p>walking speed</p>
      <p>hp - max | current (campaign) | bonus (campaign)</p>
      <p>hp dice - bonus</p>
      <p>saves - success e failure (campaign)</p>
    </div>
    <div className="my-4">
      <p className="font-bold">bag</p>
      <p>equipment - weapon, armor, etc</p>
      <p className="font-bold">currency</p>
      <p>CP - copper coin - 1</p>
      <p>SP - silver coin - 10</p>
      <p>EP - electrum coin - 50</p>
      <p>GP - gold coin - 100</p>
      <p>PP - platinum coin - 1000</p>
    </div>
    <div className="my-4">
      <p className="font-bold">attack / spells</p>
      <p>normal attacks - name | damage | type | bonus damage | description (optional)</p>
      <p>spells - levels: 0 to 9</p>
      <p>casting time | range | duration | description</p>
      <p>components: Voice</p>
      <p>saving throw | damage (scales)</p>
    </div>
    <div className="my-4">
      <p className="font-bold">more:</p>
      <p>other proficiencies</p>
      <p>languages</p>
    </div>
    <div className="my-4">
      <p className="font-bold">about:</p>
      <p>age</p>
      <p>height</p>
      <p>weight</p>
      <p>eyes color</p>
      <p>skin color</p>
      <p>hair color</p>
      <p>appearance - image needed</p>
      <p>personality traits</p>
      <p>ideals</p>
      <p>flaws</p>
      <p>bonds</p>
      <p>allies and organizations - name and symbol</p>
      <p>character history</p>
      <p>features and talents</p>
      <p>treasures</p>
    </div>
    <div className="w-full px-2 py-1 bg-yellow-300">
      <p className="font-bold">note:</p>
      <p>information editing</p>
    </div>
  </div>
}