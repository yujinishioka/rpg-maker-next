'use client'

import { Disclosure } from "@headlessui/react";
import CardPersonagem from "@/components/cards/CardPersonagem";

export default function BlockListAccordion({ data }: any) {
  return <div className="grid grid-cols-1 gap-4 p-6 rounded-lg bg-black/40 lg:grid-cols-2">
    {data.map((item: any) => <div key={`accordion-${item.id}`}>
      <Disclosure>
        <Disclosure.Button className="w-full flex bg-primary-light rounded-t-lg text-white">
          <h2 className="w-1/2 h-full bg-primary rounded-tl-lg px-2 py-4 uppercase lg:py-1">{item.name}</h2>
          <div className="w-1/2 flex flex-col justify-between px-4 py-1 lg:flex-row">
            <p>Nível {item.level}</p>
            <p>{item.classes[0].name}</p>
          </div>
        </Disclosure.Button>
        <Disclosure.Panel className="w-full">
          <CardPersonagem data={item} />
        </Disclosure.Panel>
      </Disclosure>
    </div>)}
  </div>
}