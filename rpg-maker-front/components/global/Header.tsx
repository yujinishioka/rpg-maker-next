import Link from "next/link";
import { ItemMenu } from "@/types";
import Menu from "./Menu";

export default function Header() {
  const menuItens: ItemMenu[] = [
    { name: "Characters", href: "characters" },
    { name: "Campaign", href: "campaign" },
    { name: "Wiki", href: "wiki" },
    { name: "Notes", href: "notes" },
    { name: "Account", href: "account" },
  ]

  return <div className="py-4 bg-black/70">
    <div className="container flex items-center justify-between text-white">
      <Link href="/">RPG maker</Link>
      <p>logo</p>
      <Menu items={menuItens}  />
    </div>
  </div>
}