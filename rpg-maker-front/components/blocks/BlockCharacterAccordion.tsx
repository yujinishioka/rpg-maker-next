'use client'

import { Disclosure } from "@headlessui/react";
import CardCharacter from "@/components/cards/CardCharacter";

export default function BlockCharacterAccordion({ data }: any) {
  return (
    <div className="grid grid-cols-1 gap-4 p-6 rounded-lg bg-secondary-light lg:grid-cols-3">
      {data.map((item: any) => <div key={`accordion-${item.id}`}>
        <Disclosure>
          {({open}) => (
            <>
              <Disclosure.Button className="w-full flex rounded-t-lg text-white">
                <h2 className={`w-1/2 h-full bg-primary rounded-tl-lg px-2 py-4 uppercase lg:py-1
                  ${ open ? "" : "rounded-bl-lg" }
                `}>
                  {item.name}
                </h2>
                <div className={`w-1/2 bg-primary-light rounded-tr-lg flex flex-col justify-between px-4 py-1 lg:flex-row
                  ${ open ? "" : "rounded-br-lg" }
                `}>
                  <p>Level {item.level}</p>
                  <p>{item.classes[0].name}</p>
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="w-full">
                <CardCharacter data={item} />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>)}
    </div>
  )
}