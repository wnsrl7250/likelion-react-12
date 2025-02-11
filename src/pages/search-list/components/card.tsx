import { ColorMoodItem } from '../types';

interface CardProps {
  item: ColorMoodItem;
}

function Card({ item }: CardProps) {
  return (
    <article>
      <h4>{item.title}</h4>
    </article>
  );
}

export default Card;
