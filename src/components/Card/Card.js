import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import clsx from 'clsx';
import styles from './Card.module.scss';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = e => {
    e.stopPropagation(); // zapobiega np. nawigacji po kliknięciu
    dispatch(toggleCardFavorite(id)); // togglujemy favorite
  };

  return (
    <li className={styles.card}>
      <span>{title}</span>
      <button
        className={clsx(styles.favoriteButton, { [styles.active]: isFavorite })}
        onClick={handleFavoriteClick}
        title={isFavorite ? 'Remove from favorites' : 'Add to favorites'} >
        <i className={clsx('fa', isFavorite ? 'fa-star' : 'fa-star-o')}></i>
      </button>
    </li>
  );
};

export default Card;
