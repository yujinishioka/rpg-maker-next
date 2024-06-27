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
  const [selectedSubRace, setSelectedSubRace] = useState<any>(null);
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
  const namesExamplesByRace = ['male', 'female', 'childhood', 'clan'];
  const ability_score = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
  const skills_proficiency = [
    { name: 'Acrobatics', value: 'acrobatics', ability: 'dex' },
    { name: 'Animal Handling', value: 'animalHandling', ability: 'wis' },
    { name: 'Arcana', value: 'arcana', ability: 'int' },
    { name: 'Athletics', value: 'athletics', ability: 'str' },
    { name: 'Deception', value: 'deception', ability: 'cha' },
    { name: 'History', value: 'history', ability: 'int' },
    { name: 'Insight', value: 'insight', ability: 'wis' },
    { name: 'Intimidation', value: 'intimidation', ability: 'cha' },
    { name: 'Investigation', value: 'investigation', ability: 'int' },
    { name: 'Medicine', value: 'medicine', ability: 'wis' },
    { name: 'Nature', value: 'nature', ability: 'int' },
    { name: 'Perception', value: 'perception', ability: 'wis' },
    { name: 'Performance', value: 'performance', ability: 'cha' },
    { name: 'Persuasion', value: 'persuasion', ability: 'cha' },
    { name: 'Religion', value: 'religion', ability: 'int' },
    { name: 'Sleight of Hand', value: 'sleightOfHand', ability: 'dex' },
    { name: 'Stealth', value: 'stealth', ability: 'dex' },
    { name: 'Survival', value: 'survival', ability: 'wis' }
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
    setSelectedSubRace(null);
  };

  const handleSubRaceChange = (value: string) => {
    const subrace = selectedRace.subrace.division.find((subrace: any) => subrace.name === value);
    setSelectedSubRace(subrace);
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
    event: any,
    skill: keyof SkillsProficiency
  ) => {
    setSkillsProficiency({
      ...skillsProficiency,
      [skill]: event,
    });
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

  const nameEmpty = () => name === "";
  const raceEmpty = () => selectedRace === null;
  const subraceEmpty = () => (selectedRace !== null && selectedRace.subrace !== null && selectedSubRace === null);
  const classEmpty = () => selectedClass === null;
  const alignmentEmpty = () => (selectedMorality === null || selectedAttitude === null);
  const fieldsEmpty = () => (nameEmpty() || raceEmpty() || subraceEmpty() || classEmpty() || alignmentEmpty());

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
          {selectedRace && selectedRace.subrace !== null && (
            <label className='flex gap-2 items-center justify-between'>
              <h2>Sub Race</h2>
              <Select value={selectedSubRace?.name || ''} onValueChange={handleSubRaceChange}>
                <SelectTrigger className="w-[240px]">
                  <SelectValue placeholder="Select a subrace" />
                </SelectTrigger>
                <SelectContent>
                  {selectedRace.subrace.division?.length > 0 && selectedRace.subrace.division.map((subrace: any) => (
                    <SelectItem key={`race-${subrace.id}`} value={subrace.name}>
                      {subrace.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
          )}
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
                        onCheckedChange={(e) => handleSkillsProficiencyChange(e, skill.value)}
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
                        (skillsProficiency[skill.value as keyof SkillsProficiency] ? 2 : 0)
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
            <h2>Hit Points:</h2>
            <div>
              <p>texto</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center pt-8 pb-6 gap-6 lg:pb-2'>
          <div className='relative'>
            <Button
              onClick={handleCharacter}
              className='px-10'
              disabled={fieldsEmpty()}
            >
              Create
            </Button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className={`absolute top-2 right-2 px-2 bg-primary text-white z-50 rounded-lg`}>
                  { fieldsEmpty() ? '?' : '' }
                </TooltipTrigger>
                <TooltipContent className='mb-2 bg-black/80 text-white text-sm'>
                  <div className='max-w-[180px] text-center'>
                    <p>{ nameEmpty() ? 'empty NAME field' : '' }</p>
                    <p>{ raceEmpty() ? 'empty RACE field' : '' }</p>
                    <p>{ subraceEmpty() ? 'empty SUBRACE field' : '' }</p>
                    <p>{ classEmpty() ? 'empty CLASS field' : '' }</p>
                    <p>{ alignmentEmpty() ? 'empty ALIGNMENT field' : '' }</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Button
            onClick={handleClear}
            className='px-10'
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
                  {selectedRace.names?.types && namesExamplesByRace.map((type: any) => (
                    <div key={`names-${selectedRace}-${type}`} className="flex flex-wrap gap-1">
                      {selectedRace.names?.types[type] && (
                        <>
                          <h4 className='font-semibold'>{type}:</h4>
                          {selectedRace.names.types[type].map((name: string) => (
                            <p key={`${selectedRace}-${name}`}>{name}</p>
                          ))}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
