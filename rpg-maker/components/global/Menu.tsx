import Link from "next/link";
import { ItemMenu } from "@/types";
import { Popover } from "@headlessui/react";
import IconMenu from "@/components/icons/IconMenu";

type Props = {
  items: ItemMenu[],
}

export default function Menu(data: Readonly<Props>) {
  return <>
    {/* Mobile */}
    <Popover className="relative lg:hidden">
      {({open}) => (<>
        <Popover.Button>
          <IconMenu/>
        </Popover.Button>
        <Popover.Panel className="absolute top-[2.75rem] -right-8 w-[100vw] flex flex-col py-4 px-8 gap-2 items-end bg-primary">
          {data?.items && data.items.length > 0 && data.items.map((item: ItemMenu) =>
            <Link key={`menu-${item.href}`} href={item.href}>{item.name}</Link>
          )}
        </Popover.Panel>
      </>)}
    </Popover>
    {/* Desktop */}
    <div className="hidden gap-8 lg:flex">
      {data?.items && data.items.length > 0 && data.items.map((item: ItemMenu) =>
        <Link key={`menu-${item.href}`} href={item.href}>{item.name}</Link>
      )}
    </div>
  </>
}