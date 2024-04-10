import BlockListAccordion from "@/components/blocks/BlockListAccordion";

export default function Personagens():any {
  return <div className="container min-h-[calc(100vh-10.4rem)] my-6 lg:min-h-[calc(100vh-10rem)]">
    <h1 className='mb-6 uppercase'>Personagens</h1>
    <p>Em processo:</p>
    <BlockListAccordion/>
  </div>
}