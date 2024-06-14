import BlockCharacterAccordion from "@/components/blocks/BlockCharacterAccordion";
import characters from "@/data/characters.json";

export default function Characters():any {
  return <div className="container min-h-[calc(100vh-10.4rem)] my-6 lg:min-h-[calc(100vh-10rem)]">
    <h1 className='mb-6 uppercase'>Characters</h1>
    <BlockCharacterAccordion data={characters} />
  </div>
}