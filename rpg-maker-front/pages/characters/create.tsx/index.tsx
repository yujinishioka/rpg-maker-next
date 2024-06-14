import races from '@/data/races.json'

export default function CreateCharacter():any {
  return <div className="container min-h-[calc(100vh-10.4rem)] my-6 lg:min-h-[calc(100vh-10rem)]">
    <h1 className='mb-6 uppercase'>Create Character</h1>
    <p>Name:</p>
    <p>Race:</p>
    {races?.length > 0 && races.map((race: any) => (
      <div key={`race-${race.id}`}>
        {race.name}
      </div>
    ))}
  </div>
}