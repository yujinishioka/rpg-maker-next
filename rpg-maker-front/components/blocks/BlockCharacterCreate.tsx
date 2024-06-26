import React, { useState } from 'react';
import Html from '@/components/html/Html';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { AbilityScores, SkillsProficiency } from '@/types/index';

export default function BlockCharacterCreate({ data }: any) {
  const [selectedRace, setSelectedRace] = useState<any>(null);
  const [selectedClass, setSelectedClass] = useState<any>(null);
  const [selectedMorality, setSelectedMorality] = useState<string | null>(null);
  const [selectedAttitude, setSelectedAttitude] = useState<string | null>(null);
  const [gender, setGender] = useState<string>('male');
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [weight, setWeight] = useState<number | ''>('');
  const [hair, setHair] = useState<string>('');
  const [skin, setSkin] = useState<string>('');
  const [eyes, setEyes] = useState<string>('');
  const [personality, setPersonality] = useState<string>('');
  const [ideals, setIdeals] = useState<string>('');
  const [abilityScores, setAbilityScores] = useState<AbilityScores>({str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10});
  const [skillsProficiency, setSkillsProficiency] = useState<SkillsProficiency>({
    acrobatics: false,
    animalHandling: false,
    arcana: false,
    athletics: false,
    deception: false,
    history: false,
    insight: false,
    intimidation: false,
    investigation: false,
    medicine: false,
    nature: false,
    perception: false,
    performance: false,
    persuasion: false,
    religion: false,
    sleightOfHand: false,
    stealth: false,
    survival: false
  });

  const alignments = data.alignments;
  const attitude = data.attitude;
  const classes = data.classes;
  const morality = data.morality;
  const races = data.races;
  const ability_score = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
  const skills_proficiency = [
    { name: 'Acrobatics', ability: 'dex' },
    { name: 'Animal Handling', ability: 'wis' },
    { name: 'Arcana', ability: 'int' },
    { name: 'Athletics', ability: 'str' },
    { name: 'Deception', ability: 'cha' },
    { name: 'History', ability: 'int' },
    { name: 'Insight', ability: 'wis' },
    { name: 'Intimidation', ability: 'cha' },
    { name: 'Investigation', ability: 'int' },
    { name: 'Medicine', ability: 'wis' },
    { name: 'Nature', ability: 'int' },
    { name: 'Perception', ability: 'wis' },
    { name: 'Performance', ability: 'cha' },
    { name: 'Persuasion', ability: 'cha' },
    { name: 'Religion', ability: 'int' },
    { name: 'Sleight of Hand', ability: 'dex' },
    { name: 'Stealth', ability: 'dex' },
    { name: 'Survival', ability: 'wis' }
  ]

  const handleGenderChange = (value: string) => {
    setGender(value);
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleRaceChange = (value: string) => {
    const race = races.find((race: any) => race.name === value);
    setSelectedRace(race);
  };

  const handleClassChange = (value: string) => {
    const selectedClass = classes.find((classType: any) => classType.name === value);
    setSelectedClass(selectedClass);
  }

  const handleAbilityScoreChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    attribute: keyof AbilityScores
  ) => {
    setAbilityScores({
      ...abilityScores,
      [attribute]: parseInt(event.target.value),
    });
  };

  const handleSkillsProficiencyChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    skill: string
  ) => {
    const { checked } = event.target;
    console.log('handleSkillsProficiencyChange');
    setSkillsProficiency(prevState => ({
      ...prevState,
      [skill]: checked,
    }));
  }

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value ? parseInt(event.target.value) : '');
  }

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(event.target.value ? parseInt(event.target.value) : '');
  }

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(event.target.value ? parseInt(event.target.value) : '');
  }

  const handleHairChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHair(event.target.value);
  }

  const handleSkinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSkin(event.target.value);
  }

  const handleEyesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEyes(event.target.value);
  }

  const handlePersonalityChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPersonality(event.target.value);
  }

  const handleIdealsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIdeals(event.target.value);
  }

  const handleCharacter = () => {
    console.log(`name: ${name}`);
    selectedRace ? console.log(`race: ${selectedRace.name}`) : console.log('race not selected');
    selectedClass ? console.log(`class: ${selectedClass.name}`) : console.log('class not selected');
    selectedMorality && selectedAttitude ? console.log(`alignment: ${selectedMorality} ${selectedAttitude}`) : console.log('alignment incomplete');
  }

  const handleClear = () => {
    setGender('male');
    setName('');
    setSelectedRace(null);
    setSelectedClass(null);
    setSelectedMorality(null);
    setSelectedAttitude(null);
    setAbilityScores({
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      cha: 10,
    });
    setAge('');
    setHeight('');
    setWeight('');
    setHair('');
    setSkin('');
    setEyes('');
    setPersonality('');
    setIdeals('');
    console.log('Limpar campos.');
  }

  return (
    <div className="container lg:flex lg:gap-12">
      <div className='flex flex-col max-w-[768px] mb-6 gap-2 lg:w-[640px] lg:mb-0'>
        <h1 className='mb-6 uppercase'>Create Character</h1>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2 items-center justify-between'>
            <h2>Gender</h2>
            <RadioGroup defaultValue="male" value={gender} onValueChange={handleGenderChange} className='flex gap-6'>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="r2" />
                <Label htmlFor="female">Female</Label>
              </div>
            </RadioGroup>
          </div>
          <label className='flex gap-2 items-center justify-between'>
            <h2>Name</h2>
            <input
              type='text'
              name="name"
              value={name}
              onChange={handleNameChange}
              required
              className='w-[240px] px-3 py-1 text-sm border rounded'
            />
          </label>
          <label className='flex gap-2 items-center justify-between'>
            <h2>Race</h2>
            <Select value={selectedRace?.name || ''} onValueChange={handleRaceChange}>
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
            <h2>Class</h2>
            <Select value={selectedClass?.name || ''} onValueChange={handleClassChange}>
              <SelectTrigger className="w-[240px]">
                <SelectValue placeholder="Select a class" />
              </SelectTrigger>
              <SelectContent>
                {classes?.length > 0 && classes.map((classRPG: any) => (
                  <SelectItem key={`class-${classRPG.id}`} value={classRPG.name}>
                    {classRPG.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </label>
          <div className='items-center justify-between sm:flex sm:gap-2'>
            <h2 className='mb-2 sm:mb-0'>Alignment</h2>
            <div className='flex gap-2'>
              <Select value={selectedMorality ?? ''} onValueChange={setSelectedMorality}>
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
              <Select value={selectedAttitude ?? ''} onValueChange={setSelectedAttitude}>
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
          </div>
          {selectedMorality && selectedAttitude && (
            <div className="self-end text-black/70 text-sm text-end border border-solid border-black/60 rounded p-1 lg:w-4/5">
              {alignments.map((alignment: any) => (
                alignment.name.toLowerCase() === `${selectedMorality} ${selectedAttitude}` ? alignment.description : null
              ))}
            </div>
          )}
          {ability_score?.length > 0 && (
            <>
              <div className='py-1 items-center justify-between sm:flex sm:gap-2'>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <h2 className="text-center">Ability Score</h2>
                    </TooltipTrigger>
                    <TooltipContent className='bg-primary text-white'>
                      <p className='max-w-[160px] text-center'>Roll 4 d6 and record the total of the highest three dice.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <div className="pt-2 grid grid-cols-3 gap-2 lg:pt-0 lg:grid-cols-6">
                  {ability_score.map((attribute: any)=> (
                    <label key={`attribute-${attribute}`} className='flex flex-col items-center'>
                      <p className='text-sm'>{attribute.toUpperCase()}</p>
                      <input
                        type="number"
                        name={attribute}
                        value={abilityScores[attribute as keyof AbilityScores]}
                        onChange={(e) => handleAbilityScoreChange(e, attribute)}
                        min={3}
                        max={18}
                        required
                        className="flex w-[55px] py-1 border border-secondary rounded text-center"
                      />
                    </label>
                  ))}
                </div>
              </div>
              <h2>Skills:</h2>
              <div className='grid grid-cols-1 gap-y-3 lg:grid-cols-2 lg:gap-x-12'>
                {skills_proficiency.map((skill: any) => (
                  <div key={skill.name} className='flex justify-between items-center space-x-2'>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        name={skill.name}
                        checked={skillsProficiency[skill.name as keyof SkillsProficiency]}
                        onChange={(e) => handleSkillsProficiencyChange(e, skill.name)}
                      />
                      <label
                        htmlFor={skill.name}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {skill.name} (<strong>{skill.ability}</strong>)
                      </label>
                    </div>
                    <p>
                      {
                        abilityScores[skill.ability as keyof AbilityScores] +
                        (skillsProficiency[skill.name.toLowerCase() as keyof SkillsProficiency] ? 2 : 0)
                      }
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
          <p className='my-3 font-semibold underline text-sm'>It`s no longer obligatory from here on</p>
          <div className='grid gap-x-6 gap-y-2 lg:grid-cols-2'>
            <label className='flex gap-2 items-center justify-between'>
              <p>Age (years):</p>
              <input 
                name="age" 
                type='number' 
                value={age} 
                onChange={handleAgeChange} 
                min={1} 
                className='w-[100px] p-1 text-center text-sm border rounded' 
              />
            </label>
            <label className='flex gap-2 items-center justify-between'>
              <p>Height (feets):</p>
              <input 
                name="height" 
                type='number' 
                value={height} 
                onChange={handleHeightChange} 
                min={1} 
                className='w-[100px] p-1 text-center text-sm border rounded' 
              />
            </label>
            <label className='flex gap-2 items-center justify-between'>
              <p>Weight (pounds):</p>
              <input 
                name="weight" 
                type='number' 
                value={weight} 
                onChange={handleWeightChange} 
                min={1} 
                className='w-[100px] p-1 text-center text-sm border rounded' 
              />
            </label>
            <label className='flex gap-2 items-center justify-between'>
              <p>Hair color:</p>
              <input 
                name="hair" 
                type='text' 
                value={hair} 
                onChange={handleHairChange} 
                className='w-[180px] p-1 text-center text-sm border rounded' 
              />
            </label>
            <label className='flex gap-2 items-center justify-between'>
              <p>Skin color:</p>
              <input 
                name="skin" 
                type='text' 
                value={skin} 
                onChange={handleSkinChange} 
                className='w-[180px] p-1 text-center text-sm border rounded' 
              />
            </label>
            <label className='flex gap-2 items-center justify-between'>
              <p>Eyes color:</p>
              <input 
                name="eyes" 
                type='text' 
                value={eyes} 
                onChange={handleEyesChange} 
                className='w-[180px] p-1 text-center text-sm border rounded' 
              />
            </label>
            <label className='flex flex-col gap-2 items-center justify-between lg:flex-row'>
              <p>Personality:</p>
              <textarea 
                name="personality" 
                rows={8} 
                value={personality} 
                onChange={handlePersonalityChange} 
                className='w-full p-1 content-center text-center text-sm border rounded lg:w-[180px]' 
              />
            </label>
            <label className='flex flex-col gap-2 items-center justify-between lg:flex-row'>
              <p>Ideals:</p>
              <textarea 
                name="ideals" 
                rows={8} 
                value={ideals} 
                onChange={handleIdealsChange} 
                className='w-full p-1 content-center text-center text-sm border rounded lg:w-[180px]' 
              />
            </label>
          </div>
          <p className='my-3 underline text-sm'>Other infos:</p>
          <div className='flex flex-col gap-2'>
            <h2>TODO</h2>
            <div>
              <p>texto</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center pt-8 pb-6 gap-6 lg:pb-2'>
          <Button
            className='px-10'
            onClick={handleCharacter}
          >
            Create
          </Button>
          <Button
            className='px-10'
            onClick={handleClear}
          >
            Reset
          </Button>
        </div>
      </div>
      <div className='lg:w-[calc(100%-688px)] text-sm text-justify'>
        <h2 className='uppercase mb-6'>Race & Class</h2>
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
            {selectedRace?.names && (
              <div className="flex flex-col gap-2">
                <h3 className='font-semibold'>Names</h3>
                <Html text={selectedRace.names.description} />
                <div className="flex flex-col gap-1 text-sm">
                  {selectedRace.names?.types?.male && selectedRace.names.types.male.length > 0 &&(
                    <div className="flex flex-wrap gap-1">
                      <h4 className='font-semibold'>Male:</h4>
                      {selectedRace.names.types.male.map((maleName: any, index: number) => (
                        <p key={`names-male-${index}`}>{maleName}</p>
                      ))}
                    </div>
                  )}
                  {selectedRace.names?.types?.female && selectedRace.names.types.female.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      <h4 className='font-semibold'>Female:</h4>
                      {selectedRace.names.types.female.map((femaleName: any, index: number) => (
                        <p key={`names-female-${index}`}>{femaleName}</p>
                      ))}
                    </div>
                  )}
                  {selectedRace.names?.types?.childhood && selectedRace.names.types.childhood.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      <h4 className='font-semibold'>Childhood:</h4>
                      {selectedRace.names.types.childhood.map((childhoodName: any, index: number) => (
                        <p key={`names-childhood-${index}`}>{childhoodName}</p>
                      ))}
                    </div>
                  )}
                  {selectedRace.names?.types?.clan && selectedRace.names.types.clan.length > 0 &&(
                    <div className="flex flex-wrap gap-1">
                      <h4 className='font-semibold'>Clan:</h4>
                      {selectedRace.names.types.clan.map((clanName: any, index: number) => (
                        <p key={`names-clan-${index}`}>{clanName}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
