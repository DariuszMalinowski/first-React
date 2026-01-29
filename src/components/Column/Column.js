import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const Column = ({ id, title, icon }) => {
  const cards = useSelector(state => state.cards);
  const searchString = useSelector(state => state.searchString);

  const filteredCards = useMemo(
    () =>
      cards.filter(
        card =>
          card.columnId === id &&
          card.title.toLowerCase().includes(searchString.toLowerCase())
      ),
    [cards, id, searchString]
  );

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + icon} />
        {title}
      </h2>
      <ul className={styles.cards}>
        {filteredCards.map(card => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
      <CardForm columnId={id} />
    </article>
  );
};

export default Column;

