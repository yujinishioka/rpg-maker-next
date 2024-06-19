import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import races from '@/data/races.json'

export default function CreateCharacter():any {
  return <div className="container min-h-[calc(100vh-10.4rem)] my-6 lg:min-h-[calc(100vh-10rem)]">
    <div className='max-w-[640px]'>
      <h1 className='mb-6 uppercase'>Create Character</h1>
      <div className='flex flex-col gap-2'>
        <label className='flex gap-2 items-center justify-between'>
          <p>Name</p>
          <input name="name" className='w-[240px] px-3 py-1 text-sm border rounded'/>
        </label>
        <label className='flex gap-2 items-center justify-between'>
          <p>Race</p>
          <Select>
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Select a race"/>
            </SelectTrigger>
            <SelectContent>
              {races?.length > 0 && races.map((race: any) => (
                <SelectItem key={`race-${race.id}`} value={race.name}>
                  {race.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </label>
      </div>
    </div>
  </div>
}