import BlockCharacterCreate from '@/components/blocks/BlockCharacterCreate';
import alignments from '@/data/alignments.json';
import classes from '@/data/classes.json';
import races from '@/data/races.json';

export default function CharacterCreate(): any {
  const attitude = ['Good', 'Neutral', 'Evil'];
  const morality = ['Lawful', 'Neutral', 'Chaotic'];

  const data = {
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
