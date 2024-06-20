import BlockCharacterCreate from '@/components/blocks/BlockCharacterCreate';
import alignments from '@/data/alignments.json';
import classes from '@/data/classes.json';
import races from '@/data/races.json';

export default function CharacterCreate(): any {
  const ability_score = ['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'];
  const attitude = ['Good', 'Neutral', 'Evil'];
  const morality = ['Lawful', 'Neutral', 'Chaotic'];

  const data = {
    ability_score,
    alignments,
    attitude,
    classes,
    morality,
    races
  }

  return (
    <div className='min-h-[calc(100vh-10.4rem)] my-6 lg:min-h-[calc(100vh-10rem)]'>
      <BlockCharacterCreate data={data} />
    </div>
  );
}
