import { useSelector } from 'react-redux';
import Card from '../components/Card/Card';
import styles from './Pages.module.scss';
import { getFavoriteCards } from '../redux/cardsRedux';


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
            title={card.title}
            isFavorite={card.isFavorite}
          />
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
