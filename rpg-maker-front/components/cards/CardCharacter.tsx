import Link from "next/link";

export default function CardCharacter({ data }: any) {
  return <div className="flex flex-col relative bg-white rounded-b-lg text-black/70">
    <div className="w-full flex p-2">
      <div className="w-1/2">
        <h2>Races:</h2>
        {data?.races && data.races.length > 0 && data.races.map((race: any) => <p key={`race-${race.id}`}>
          {race.name}
        </p>)}
      </div>
      <div className="ml-2">
        <h2>Class:</h2>
        {data?.classes && data.classes.length > 0 && data.classes.map((classChar: any) => <p key={`classChar-${classChar.id}`}>
          {classChar.name}: {classChar.level}
        </p>)}
      </div>
    </div>
    <nav className="flex justify-center bg-blue-400 rounded-b-lg p-1 text-white">
      <Link href={`/characters/${data.id}`} className="border border-white px-4 py-1">Character</Link>
    </nav>
  </div>
}