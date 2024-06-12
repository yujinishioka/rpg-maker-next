import BlockCharacterAccordion from "@/components/blocks/BlockCharacterAccordion";
import personagens from "@/data/characters.json";

export default function Personagens():any {
  return <div className="container min-h-[calc(100vh-10.4rem)] my-6 lg:min-h-[calc(100vh-10rem)]">
    <h1 className='mb-6 uppercase'>Characters</h1>
    <BlockCharacterAccordion data={personagens} />
  </div>
}