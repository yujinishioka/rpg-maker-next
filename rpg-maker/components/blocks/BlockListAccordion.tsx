'use client'

import { Disclosure } from "@headlessui/react";
import CardPersonagem from "@/components/cards/CardPersonagem";

export default function BlockListAccordion() {
  return <Disclosure>
    <Disclosure.Button className="py-2">
      <h2>Nome do personagem</h2>
    </Disclosure.Button>
    <Disclosure.Panel>
      <CardPersonagem/>
    </Disclosure.Panel>
  </Disclosure>
}