export const MemorialCard = ({ card, index, choose }) => {
  const classification = `${card.play ? 'play' : 'noPlay'} memoryCard`;
  return (
    <div className={classification}>
      <img
        className={card.reveal ? 'chosen' : ''}
        src={`/img/${card.image}.png`}
        alt='food'
        onClick={() => choose(index)}
      />
    </div>
  );
};
