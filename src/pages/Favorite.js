import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../redux/store';
import Card from '../components/Card/Card';
import styles from './Pages.module.scss';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);

  if (favoriteCards.length === 0) {
    return <p>No cards...</p>;
  }

  return (
    <div className={styles.favorite}>
      <h2>Favorite Cards</h2>
      <ul className={styles.cards}>
        {favoriteCards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}          // ✅ upewnij się, że title jest przekazywane
            isFavorite={card.isFavorite} // ✅ i isFavorite
          />
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
