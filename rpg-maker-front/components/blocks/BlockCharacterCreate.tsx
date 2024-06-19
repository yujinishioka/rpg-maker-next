import React, { useState } from 'react';
import Html from '@/components/html/Html';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function BlockCharacterCreate({ data }: any) {
  const [selectedRace, setSelectedRace] = useState<any>(null);
  const alignments = data.alignments;
  const attitude = data.attitude;
  const attributes = data.attributes;
  const classes = data.classes;
  const morality = data.morality;
  const races = data.races;

  const handleRaceChange = (value: string) => {
    const race = races.find((race: any) => race.name === value);
    setSelectedRace(race);
  };

  return (
    <div className="container lg:flex lg:gap-12">
      <div className='max-w-[768px] mb-6 lg:w-[640px] lg:mb-0'>
        <h1 className='mb-6 uppercase'>Create Character</h1>
        <div className='flex flex-col gap-2'>
          <label className='flex gap-2 items-center justify-between'>
            <p>Name</p>
            <input name="name" className='w-[240px] px-3 py-1 text-sm border rounded' />
          </label>
          <label className='flex gap-2 items-center justify-between'>
            <p>Race</p>
            <Select onValueChange={handleRaceChange}>
              <SelectTrigger className="w-[240px]">
                <SelectValue placeholder="Select a race" />
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
          <label className='flex gap-2 items-center justify-between'>
            <p>Class</p>
            <Select>
              <SelectTrigger className="w-[240px]">
                <SelectValue placeholder="Select a class" />
              </SelectTrigger>
              <SelectContent>
                {classes?.length > 0 && classes.map((classRPG: any) => (
                  <SelectItem key={`class-${classRPG.id}`} value={classRPG.name.toLowerCase()}>
                    {classRPG.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </label>
          <label className='items-center justify-between sm:flex sm:gap-2'>
            <p className='mb-2 sm:mb-0'>Alignment</p>
            <div className='flex gap-2'>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a morality" />
                </SelectTrigger>
                <SelectContent>
                  {morality?.length > 0 && morality.map((item: any) => (
                    <SelectItem key={`morality-${item.toLowerCase()}`} value={item.toLowerCase()}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select an attitude" />
                </SelectTrigger>
                <SelectContent>
                  {attitude?.length > 0 && attitude.map((item: any, index: number) => (
                    <SelectItem key={`attitude-${index}`} value={item.toLowerCase()}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </label>
          {attributes?.length > 0 && (
            <div className='items-center justify-between sm:flex sm:gap-2'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <p className="text-center">Status</p>
                  </TooltipTrigger>
                  <TooltipContent className='bg-primary text-white'>
                    <p className='max-w-[160px]'>Roll 4 d6 and record the total of the highest three dice.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="flex gap-2">
                {attributes.map((attribute: any)=> (
                  <label key={`attribute-${attribute.toLowerCase()}`} className='flex flex-col'>
                    <p className="text-center">{attribute}</p>
                    <input
                      name={attribute.toLowerCase()}
                      type="number"
                      min={3}
                      max={18}
                      required
                      className="flex w-[55px] py-1 border rounded text-center"
                    />
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='lg:w-[calc(100%-688px)]'>
        <h2 className='uppercase mb-6'>Details</h2>
        {selectedRace && (
          <>
            {selectedRace.details?.length > 0 && (
              selectedRace.details.map((detail: any, index: number) => (
                <div key={`race-details-${index}`} className="flex flex-col gap-2 mb-6 last:mb-0">
                  <h3 className="font-semibold">{detail.title}</h3>
                  <Html text={detail.description} className="flex flex-col gap-2" />
                </div>
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
}
