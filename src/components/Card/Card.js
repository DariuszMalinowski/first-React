import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

import clsx from 'clsx';
import styles from './Card.module.scss';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = e => {
    e.stopPropagation();
    dispatch(toggleCardFavorite(id));
  };

  const handleRemoveClick = e => {
    e.stopPropagation();
    dispatch(removeCard(id));
  };


  return (
  <li className={styles.card}>
    <span>{title}</span>

    <div className={styles.actions}>
      <button
        className={clsx(styles.favoriteButton, { [styles.active]: isFavorite })}
        onClick={handleFavoriteClick}
        title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        <i className={clsx('fa', isFavorite ? 'fa-star' : 'fa-star-o')}></i>
      </button>

      <button
        className={styles.removeButton}
        onClick={handleRemoveClick}
        title="Remove card"
      >
        <i className="fa fa-trash"></i>
      </button>
    </div>
  </li>
);

};

export default Card;
