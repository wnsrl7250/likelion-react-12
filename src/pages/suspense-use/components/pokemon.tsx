import { tm } from '@/utils/tw-merge';

function Pokemon() {
  return (
    <figure
      className={tm(
        'flex gap-5 justify-center items-center',
        'border-4 border-black/10 rounded-full',
        'h-42 transition-colors duration-250 ease-in-out ',
        'hover:border-black'
      )}
    >
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="pikachu"
        title="pikachu"
        className="size-28"
      />
    </figure>
  );
}

export default Pokemon;
